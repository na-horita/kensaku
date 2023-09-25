import { BasePhoto, BasePhotoType } from "./BasePhoto";
import { SourceType } from "../ts/photo";

export type PexelsPhotoType = BasePhotoType & {
  src: { large2x: string };
  url: string;
  photographer: string;
};

export class PexelsPhoto extends BasePhoto {
  source: SourceType;
  url: string;
  link: string;
  photographer: string;

  constructor(data: PexelsPhotoType) {
    super(data); // BasePhotoのコンストラクタ呼び出し
    this.source = "Pexels";
    this.url = data.src.large2x;
    this.link = data.url;
    this.photographer = data.photographer;
  }
}
