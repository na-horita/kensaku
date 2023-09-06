import axios from "axios";
import { SourceType, Photo } from "../ts/photo"; 

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

//pixel,Unsplashデータのオブジェクトのキーフレーズを合わせる
export const mapDataToCustomFormat = (data: any, source: SourceType = "Pexels"): Photo => {
  const commonProperties = {
    id: data.id,
    source: source,
    width: data.width,
    height: data.height,
  };

  if (source === "Pexels") {
    return {
      ...commonProperties,
      url: data.src.medium,
      link: data.url,
      photographer: data.photographer,
      created_at: data.created_at,
    };
  }

  if (source === "Unsplash") {
    return {
      ...commonProperties,
      url: data.urls.regular,
      link: data.links.html,
      photographer: data.user.name,
      created_at: data.created_at,
    };
  }
  throw new Error("未知のソースです");
};

//

// 作成日の新しい順にソートする
export const sortByNewestCreationDate = function (photos: any) {
  return photos.sort(
    (a: any, b: any) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
};
