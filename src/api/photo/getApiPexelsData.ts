import axios from "axios";
import { ApiPexelsImagesResults, ApiPexelsPhoto } from "../../ts/pexels";
import { PexelsApiSchema } from "../../ts/photo";

const pexelsAPIKey = import.meta.env.VITE_REACT_APP_API_pexels;

// Pexels APIのリクエスト 最大８０件まで
export const getApiPexelsData = async ({
  word,
  num,
}: PexelsApiSchema): Promise<ApiPexelsPhoto[] | null> => {
  try {
    const response = await requestPexelsAPI(word,num);
    validateResponse(response)

    const responseDataPhotos: ApiPexelsPhoto[] = await response.data.photos;
    return responseDataPhotos;
  } catch (error) {
    // エラーハンドリングを行う場合のコード
    console.error("Pexels APIエラー:", error);
    return null; // またはエラーを適切に処理して返す
  }
};

// APIリクエスト
export const requestPexelsAPI = async(word:string, num:number) => {
  const response = await axios.get(
    `https://api.pexels.com/v1/search?query=${word}&per_page=${num}`, 
    {
      headers: {
        Authorization: pexelsAPIKey,
      },
    }
  );
  return response;
}

// レスポンス検証
export const validateResponse = (response:any) => {
  if (!response) {
    throw new Error("Responseがありません");
  }

  if (response.status !== 200) {
    throw new Error("200番ではありません");
  }
};
