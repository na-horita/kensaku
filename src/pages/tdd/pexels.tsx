import { useState, useLayoutEffect } from "react";
import { z } from "zod";
import { match } from "ts-pattern";
import { numPexelsSchema, wordSchema } from "../../zod/photoSchema";
import { fetchData } from "../../utils/gathering";
import { Photo, PexelsApiSchema } from "../../ts/photo";
import TddNav from "../../components/tdd/TddNav";
import PexelsTableComp from "../../components/tdd/PexelsTableComp";
import { PexelsPhoto } from "../../class/PexelsPhoto";

const GetPexels = () => {
  const [pexelsDataCustom, setPexelsDataCustom] = useState<Photo[]>([]);
  const [word, setWord] = useState<string>("dog");
  const [num, setNum] = useState<number>(15);
  const [wordAlerts, setWordAlerts] = useState<string[]>([]);
  const [numAlerts, setNumAlerts] = useState<string[]>([]);

  // エラーメッセージの管理
  const numError = numPexelsSchema.safeParse(num);
  const wordError = wordSchema.safeParse(word);

  function inputValidate(
    error: z.SafeParseReturnType<string, string | number>,
    setAlerts: React.Dispatch<React.SetStateAction<string[]>>
  ) {
    if (error.success === false) {
      const errMessages = error.error.issues.map((issue: z.ZodIssue) => issue.message);
      setAlerts(errMessages);
    } else {
      setAlerts([]);
    }
  }

  useLayoutEffect(() => {
    const fetchDataAndSetCustomData = async () => {
      inputValidate(wordError, setWordAlerts);
      inputValidate(numError, setNumAlerts);

      try {
        if (wordAlerts.length > 0 || numAlerts.length > 0) {
          throw new Error("スキーマチェックでエラーがありました");
        }

        const customData = await fetchData("Pexels", { word, num });
        if (customData) {
          setPexelsDataCustom(customData);
        }
      } catch (error) {
        console.error("データ取得エラー:", error);
      }
    };
    fetchDataAndSetCustomData();
  }, [word, num]);

  // 入力値が変更されたときに呼び出されるハンドラ
  const handleWordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setWord(inputValue);
  };

  // 数値入力が変更されたときに呼び出されるハンドラ
  const handleNumInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(event.target.value, 10); //第二引数は10進数
    setNum(inputValue);
  };

  //ts-patternによる分岐
  const renderTableOrNull = match(pexelsDataCustom.length)
    .with(0, () => {
      return "";
    })
    .otherwise(() => {
      return (
        <PexelsTableComp pexelsDataCustom={pexelsDataCustom} />
      );
    });

  return (
    <>
      <TddNav />
      <div>
        <h2 className="text-center">ピクセルデータの実験</h2>
        <p className="text-center text-lg">(一度の検索は80件まで)</p>
        <div className="flex justify-center gap-x-8 my-6">
          <div>
            <label>【word】</label>
            <input
              type="text"
              name="word"
              className="border-2 border-slate-400 rounded-md px-2 text-2xl"
              value={word}
              onChange={handleWordInputChange}
            />
          </div>
          <div>
            <label>【num】</label>
            <input
              type="number"
              name="num"
              className="border-2 border-slate-400 rounded-md px-2 text-2xl"
              value={num}
              onChange={handleNumInputChange}
            />
          </div>
        </div>
        {/* エラーメッセージの表示 */}
        {wordAlerts &&
          wordAlerts.map((error: string, index: number) => (
            <p key={index} className="text-red-500 text-xl">
              {error}
            </p>
          ))}
        {numAlerts &&
          numAlerts.map((error: string, index: number) => (
            <p key={index} className="text-red-500 text-xl">
              {error}
            </p>
          ))}
        {renderTableOrNull}
      </div>
    </>
  );
};

export default GetPexels;
