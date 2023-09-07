import { useState, useEffect } from "react";
import { fetchData } from "../features/gathering";
import { Photo,GetPexelsData } from "../ts/photo";

const GetPexels = () => {
  // const [pexelsData, setPexelsData] = useState<any>([]);
  const [pexelsDataCustom, setPexelsDataCustom] = useState<Photo[]>([]);

  const inputData: GetPexelsData = {
    word: "bio",
    num: 29,
  };

  useEffect(() => {
    const fetchDataAndSetCustomData = async () => {
      const customData = await fetchData("Pexels", inputData);
      if (customData) {
        setPexelsDataCustom(customData);
      }
    };

    fetchDataAndSetCustomData();
  }, []);

  return (
    <>
      <div>
        <h2>ピクセルデータの実験ページ</h2>
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
