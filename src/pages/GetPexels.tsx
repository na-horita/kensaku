import { useState, useEffect } from "react";
import { getPexelsData, mapPexelsDataToCustomFormat } from "../features/gathering";

const pexelsAPIKey = import.meta.env.VITE_REACT_APP_API_pexels;

const GetPexels = () => {
  const [pexelsData, setPexelsData] = useState<any>([]);
  const [pexelsDataCustom, setPexelsDataCustom] = useState<any>([]);

  useEffect(() => {
    const word = "fire";
    const num = 15;
    const apiKey = pexelsAPIKey;

    getPexelsData(word, num, apiKey)
      .then((data) => {
        setPexelsData(data);
      })
      .catch((error) => {
        console.error("データの取得に失敗しました。エラー:", error);
      });
  }, []);

  useEffect(() => {
    const pexelsPhotos: any = pexelsData.map((photo: any) =>
      mapPexelsDataToCustomFormat(photo)
    );
    setPexelsDataCustom(pexelsPhotos);
  }, [pexelsData]);

  return (
    <div>
      <h2>ピクセルデータの実験ページ</h2>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetPexels;