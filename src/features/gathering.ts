import axios from "axios";

// Pexels APIのリクエスト 最大８０件まで
export const getPexelsData = async (word:string, num:number, apiKey:string) => {
  try {
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${word}&per_page=${num}`,
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );

    return response.data.photos;
  } catch (error) {
    // エラーハンドリングを行う場合のコード
    console.error("Pexels APIエラー:", error);
    return null; // またはエラーを適切に処理して返す
  }
};

// Unsplash APIのリクエスト 最大３０件まで
export const getUnsplashData = async (word2:string, num:number, apiKey:string) => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${word2}&per_page=${num}`,
      {
        headers: {
          Authorization: `Client-ID ${apiKey}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    // エラーハンドリングを行う場合のコード
    console.error("Unsplash APIエラー:", error);
    return null; // またはエラーを適切に処理して返す
  }
};


// 作成日の新しい順にソートする
export const sortByNewestCreationDate = function (photos: any) {
  return photos.sort(
    (a: any, b: any) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
};
