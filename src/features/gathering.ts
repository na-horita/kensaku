
import {
  SourceType,
  Photo,
  PexelsApiSchema,
  UnsplashApiSchema,
} from "../ts/photo";
import { getPexelsData } from "./photo/api/getPexelsData";
import { getUnsplashData } from "./photo/api/getUnsplashData";

type PexelsJadgeAlias<T extends SourceType, A, B> = T extends "Pexels" ? A : B;

//apiデータ取得とオブジェクトの整形
//第一引数　type SourceType
//第二引数　PexelsJadgeAliasはsource値に応じて型定義が変更される

export const fetchData = async (
  source: SourceType,
  inputData: PexelsJadgeAlias<typeof source, PexelsApiSchema, UnsplashApiSchema>
): Promise<Photo[] | null> => {
  try {

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
      created_at: "2010-01-01T01:01:01Z", //Pexelsには日付データが入っていないので仮で入力する
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
export const sortByNewestCreationDate = (photos: Photo[]): Photo[] => {
  return photos.sort((a: Photo, b: Photo) => {
    const createdAtA = Date.parse(a.created_at);
    const createdAtB = Date.parse(b.created_at);

    return createdAtB - createdAtA;
  });
};
