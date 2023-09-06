import { useEffect } from "react";
import { getPexelsData } from "../features/gathering"; // gathering.ts のパスに合わせて修正

const pexelsAPIKey = import.meta.env.VITE_REACT_APP_API_pexels;
// const unsplashAPIKey = import.meta.env.VITE_REACT_APP_API_unsplash;

const GetPexels = () => {

  useEffect(() => {
    const word = "fire"; // 検索するキーワードを指定
    const num = 15; // 取得する項目数を指定
    const apiKey = pexelsAPIKey; // Pexels APIキーを指定

    // getPexelsData 関数を呼び出してデータを取得
    getPexelsData(word, num, apiKey)
      .then((data) => {
        // データをコンソールに表示
        console.log(data);
      })
      .catch((error) => {
        console.error("データの取得に失敗しました。エラー:", error);
      });
  }, []);

  return (
    <div>
      <h2>ピクセルデータの実験ページ</h2>
    </div>
  );
};

export default GetPexels;
