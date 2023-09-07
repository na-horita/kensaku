import axios from "axios";
import {
  SourceType,
  Photo,
  GetPexelsData,
  pexelsApiSchema,
  unsplashApiSchema,
} from "../ts/photo";

const pexelsAPIKey = import.meta.env.VITE_REACT_APP_API_pexels;
const unsplashAPIKey = import.meta.env.VITE_REACT_APP_API_unsplash;

//apiデータ取得とオブジェクトの整形
//第一引数　type SourceType
//第二引数　zod pexelsApiSchema
export const fetchData = async (source: SourceType, inputData: GetPexelsData) => {
  try {
    // スキーマにデータを検証
    source === "Pexels"
      ? pexelsApiSchema.parse(inputData)
      : unsplashApiSchema.parse(inputData);

    const fetchResponse =
      source === "Pexels"
        ? await getPexelsData(inputData)
        : await getUnsplashData(inputData);
    const resultPhotos = fetchResponse.map((photo: any) =>
      mapDataToCustomFormat(photo, source)
    );
    return resultPhotos;
  } catch (validationError) {
    console.error("入力データが無効です。エラー:", validationError);
  }
};

// Pexels APIのリクエスト 最大８０件まで
export const getPexelsData = async ({ word, num }: GetPexelsData) => {
  try {
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${word}&per_page=${num}`,
      {
        headers: {
          Authorization: pexelsAPIKey,
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
export const getUnsplashData = async ({ word, num }: GetPexelsData) => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${word}&per_page=${num}`,
      {
        headers: {
          Authorization: `Client-ID ${unsplashAPIKey}`,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    // エラーハンドリングを行う場合のコード
    console.error("Unsplash APIエラー:", error);
    return null; // またはエラーを適切に処理して返す
  }
};

//pixel,Unsplashデータのオブジェクトのキーフレーズを合わせる
export const mapDataToCustomFormat = (
  data: any,
  source: SourceType = "Pexels"
): Photo => {
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
export const sortByNewestCreationDate = function (photos: Photo[]) {
  return photos.sort(
    (a: any, b: any) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
};
