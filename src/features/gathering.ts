
import {
  SourceType,
  Photo,
  pexelsApiSchema,
  unsplashApiSchema,
  PexelsApiSchema,
  UnsplashApiSchema,
} from "../ts/photo";
import { getPexelsData } from "./photo/api/getPexelsData";
import { getUnsplashData } from "./photo/api/getUnsplashData";

//apiデータ取得とオブジェクトの整形
//第一引数　type SourceType
//第二引数　zod pexelsApiSchema
export const fetchData = async (
  source: SourceType,
  inputData: PexelsApiSchema | UnsplashApiSchema
): Promise<Photo[] | null> => {
  try {
    // スキーマにデータを検証
    source === "Pexels"
      ? pexelsApiSchema.parse(inputData)
      : unsplashApiSchema.parse(inputData);

    const fetchResponse =
      source === "Pexels"
        ? await getPexelsData(inputData)
        : await getUnsplashData(inputData);
    const resultPhotos = await fetchResponse.map((photo: any) =>
      mapDataToCustomFormat(photo, source)
    );
    return resultPhotos;
  } catch (validationError) {
    console.error("入力データが無効です。エラー:", validationError);
    return null;
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
