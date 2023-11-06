
import {
  Photo,
  SourceType,
  PexelsJadgeAlias,
  PexelsApiSchema,
  UnsplashApiSchema,
} from "../ts/photo";
import { getApiPexelsData } from "../api/photo/getApiPexelsData";
import { getApiUnsplashData } from "../api/photo/getApiUnsplashData";
import { PexelsPhoto } from "../class/PexelsPhoto";
import { UnsplashPhoto } from "../class/UnsplashPhoto";
import { ApiPexelsPhoto } from "../ts/pexels";
import { ApiUnsplashPhoto } from "../ts/unsplash";
import { match } from "ts-pattern";

//apiデータ取得とオブジェクトの整形
//第一引数　type SourceType
//第二引数　PexelsJadgeAliasはsource値に応じて型定義が変更される
export const fetchData = async (
  source: SourceType,
  inputData: PexelsJadgeAlias<typeof source, PexelsApiSchema, UnsplashApiSchema>
): Promise<Photo[] | null> => {
  const resultPhotos = match(source)
    .with("Pexels", async () => {
      const fetchResponse = await getApiPexelsData(inputData);
      return fetchResponse
        ? fetchResponse.map((photo: ApiPexelsPhoto) =>
            mapDataToCustomFormat(photo, source)
          )
        : [];
    })
    .with("Unsplash", async () => {
      const fetchResponse = await getApiUnsplashData(inputData);
      return fetchResponse
        ? fetchResponse.map((photo: ApiUnsplashPhoto) =>
            mapDataToCustomFormat(photo, source)
          )
        : [];
    })
    .otherwise(() => {
      console.error("入力データが無効です。");
      return null;
    });

  return await resultPhotos;
};


//pixel,Unsplashデータのオブジェクトのキーフレーズを合わせる
export const mapDataToCustomFormat = (
  data: ApiPexelsPhoto | ApiUnsplashPhoto,
  source: SourceType = "Pexels"
): PexelsPhoto => {
  if (source === "Pexels") {
    return new PexelsPhoto(data as ApiPexelsPhoto);
  }

  if (source === "Unsplash") {
    return new UnsplashPhoto(data as ApiUnsplashPhoto);
  }

  throw new Error("未知のソースです");
};


// 作成日の新しい順にソートする
// Tはcreated_atプロパティを持つ型とする
export const sortByNewestCreationDate = <T extends { created_at: string }>(photos: T[]): T[] => {
  return photos.sort((a: T, b: T) => {
    const createdAtA = Date.parse(a.created_at);
    const createdAtB = Date.parse(b.created_at);

    return createdAtB - createdAtA;
  });
};