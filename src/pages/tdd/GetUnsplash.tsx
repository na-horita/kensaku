import { useState, useEffect } from "react";
import { mapDataToCustomFormat } from "../../features/gathering";
import { getUnsplashData } from "../../api/photo/getUnsplashData";
import { UnsplashApiSchema } from "../../ts/photo";
import TddNav from "../../components/tdd/TddNav";

const GetPexels = () => {
  const [pexelsData, setPexelsData] = useState<any>([]);
  const [pexelsDataCustom, setPexelsDataCustom] = useState<any>([]);

  const inputData: UnsplashApiSchema = {
    word: "globe",
    num: 20,//例え30を超えてもapiが勝手に30をセットしてくれる。
  };

  useEffect(() => {
    try {
      getUnsplashData(inputData)
        .then((data:any) => {
          setPexelsData(data);
        })
        .catch((error) => {
          console.error("データの取得に失敗しました。エラー:", error);
        });
    } catch (validationError) {
      console.error("入力データが無効です。エラー:", validationError);
    }
  }, []);

  useEffect(() => {
    const pexelsPhotos: any = pexelsData.map((photo: any) =>
      mapDataToCustomFormat(photo, "Unsplash")
    );
    setPexelsDataCustom(pexelsPhotos);
  }, [pexelsData]);

  return (
    <>
      <TddNav />
      <div>
        <h2>アンスプラッシュデータの実験</h2>
        <p className="text-center text-lg">(一度の検索は30件まで)</p>

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
