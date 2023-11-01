import { useState,useLayoutEffect } from "react";
import { fetchData } from "../../features/gathering";
import { Photo, PexelsApiSchema } from "../../ts/photo";
import TddNav from "../../components/tdd/TddNav";

const GetPexels = () => {
  const [pexelsData, setPexelsData] = useState<any>([]);
  const [pexelsDataCustom, setPexelsDataCustom] = useState<Photo[]>([]);
  const [word, setWord] = useState<string>("dog");
  const [num, setNum] = useState<number>(10);

  const inputData: PexelsApiSchema = {
    word: word,
    num: num,
  };

  useLayoutEffect(() => {
    const fetchDataAndSetCustomData = async () => {
      const customData = await fetchData("Pexels", inputData);
      if (customData) {
        setPexelsDataCustom(customData);
      }
    };
    fetchDataAndSetCustomData();
  }, [word, num]);

  // 入力値が変更されたときに呼び出されるハンドラ
  const handleWordInputChange = (event:any) => {
    const inputValue = event.target.value;
    setWord(inputValue);
  };

  // 数値入力が変更されたときに呼び出されるハンドラ
  const handleNumInputChange = (event: any) => {
    const inputValue = parseInt(event.target.value, 10); // 数値に変換
    setNum(inputValue);
  };

  return (
    <>
      <TddNav />
      <div>
        <h2>ピクセルデータの実験</h2>
        <p className="text-center text-lg">(一度の検索は80件まで)</p>
        <div className="flex justify-center gap-x-8 my-6">
          <div>
            <label>【word】</label>
            <input
              type="text"
              name="word"
              className="border-2 border-gray-500 rounded-md px-2 text-2xl"
              value={word}
              onChange={handleWordInputChange}
            />
          </div>
          <div>
            <label>【num】</label>
            <input
              type="number"
              name="num"
              className="border-2 border-gray-500 rounded-md px-2 text-2xl"
              value={num}
              onChange={handleNumInputChange}
            />
          </div>
        </div>

        {pexelsDataCustom && (
          <table className="border">
            <thead className="border bg-sky-400">
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
        )}
      </div>
      <hr className="border-orange-500 border-8" />
      <hr className="border-orange-500 border-8" />
    </>
  );
};

export default GetPexels;
