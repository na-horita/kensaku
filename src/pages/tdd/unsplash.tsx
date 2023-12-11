import { useState, useEffect, useLayoutEffect } from "react";
import { z, ZodError } from "zod";
import { mapDataToCustomFormat } from "../../features/gathering";
import { getApiUnsplashData } from "../../api/photo/getApiUnsplashData";
import { UnsplashApiSchema } from "../../ts/photo";
import TddNav from "../../components/tdd/TddNav";
import { ApiUnsplashPhoto } from "../../ts/unsplash";

const GetPexels = () => {
  const [pexelsData, setPexelsData] = useState<any>([]);
  const [pexelsDataCustom, setPexelsDataCustom] = useState<ApiUnsplashPhoto[]>([]);

  const [inputData, setInputData] = useState({ word: "cat", num: 8 });
  const [errors, setErrors] = useState<any>(null);
  const [isValidaded, setIsValidaded] = useState<boolean>(false);

  const FormData = z.object({
    word: z
      .string()
      .min(1, "wordは1文字以上である必要があります")
      .max(10, "wordは10文字以下である必要があります")
      .regex(/^[a-zA-Z0-9]*$/, "英語と数値のみが許可されています"),
    num: z
      .number()
      .int()
      .min(1, "numの数値は1以上である必要があります")
      .max(30, "numの数値は30以下である必要があります"),
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      FormData.parse(inputData);
      setErrors(null);
      setIsValidaded(true);
      setTimeout(() => {
        setIsValidaded(false);
      }, 100);
      // console.log(inputData);
    } catch (e: any) {
      if (e instanceof ZodError) {
        setErrors(e.flatten().fieldErrors);
      } else {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    try {
      getApiUnsplashData(inputData)
        .then((data: any) => {
          // console.log(data);
          setPexelsData(data);
        })
        .catch((error) => {
          console.error("データの取得に失敗しました。エラー:", error);
        });
    } catch (validationError) {
      console.error("入力データが無効です。エラー:", validationError);
    }
  }, [isValidaded === true]);

  useLayoutEffect(() => {
    const pexelsPhotos: ApiUnsplashPhoto[] = pexelsData.map((photo: ApiUnsplashPhoto) =>
      mapDataToCustomFormat(photo, "Unsplash")
    );
    setPexelsDataCustom(pexelsPhotos);
  }, [pexelsData]);


  // 入力値が変更されたときに呼び出されるハンドラ
  const handleWordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  // 数値入力が変更されたときに呼び出されるハンドラ
  const handleNumInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    const value = parseInt(event.target.value, 10); //第二引数は10進数
    setInputData({ ...inputData, [name]: value });
  };

  return (
    <>
      <TddNav />
      <div>
        <h2 className="text-center">アンスプラッシュデータの実験</h2>
        <p className="text-center text-lg">(一度の検索は30件まで)</p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center gap-x-10 mb-4">
            <div>
              <label htmlFor="word">Word</label>
              <input
                type="text"
                name="word"
                className="border-2 border-slate-400 rounded-md px-2 text-2xl"
                value={inputData.word}
                onChange={handleWordInputChange}
              />
            </div>
            <div>
              <label htmlFor="num">Num</label>
              <input
                type="number"
                name="num"
                className="border-2 border-slate-400 rounded-md px-2 text-2xl"
                value={inputData.num}
                onChange={handleNumInputChange}
              />
            </div>
          </div>
          {errors?.word && <p className="text-red-700 font-bold">{errors.word}</p>}
          {errors?.num && <p className="text-red-700 font-bold">{errors.num}</p>}
          <div className="mb-4">
            <button
              type="submit"
              className=" bg-green-500 text-white rounded-lg px-4 py-2 mx-auto block"
            >
              検索
            </button>
          </div>
        </form>

        <table className="border">
          <thead className="border bg-red-400">
            <tr>
              <th>ナンバー</th>
              <th>ID</th>
              <th>Source</th>
              <th>URL</th>
              <th>Width</th>
              <th>Height</th>
              <th>Link</th>
              <th>Photographer</th>
              <th>日付</th>
            </tr>
          </thead>
          <tbody>
            {pexelsDataCustom.map((data: any, index: number) => (
              <tr key={data.id} className="border">
                <td>【{index + 1}】</td>
                <td>{data.id}</td>
                <td>{data.source}</td>
                <td>
                  <img className="w-12 h-auto" src={data.url} />
                </td>
                <td>{data.width}</td>
                <td>{data.height}</td>
                <td>
                  <a href={data.link} target="_blank">
                    {data.link}
                  </a>
                </td>
                <td>{data.photographer}</td>
                <td>{data.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GetPexels;
