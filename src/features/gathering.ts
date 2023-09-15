
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
        ? await getApiPexelsData(inputData)
        : await getApiUnsplashData(inputData);
    
    const resultPhotos = fetchResponse
      ? fetchResponse.map((photo: ApiPexelsPhoto | ApiUnsplashPhoto) =>
          mapDataToCustomFormat(photo, source)
        )
      : [];
    
    return resultPhotos;
  } catch (validationError) {
    console.error("入力データが無効です。エラー:", validationError);
    return null;
  }
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
export const sortByNewestCreationDate = (photos: Photo[]): Photo[] => {
  return photos.sort((a: Photo, b: Photo) => {
    const createdAtA = Date.parse(a.created_at);
    const createdAtB = Date.parse(b.created_at);

    return createdAtB - createdAtA;
  });
};
