import { BasePhoto, BasePhotoType } from "./BasePhoto";
import { SourceType } from "../ts/photo";

export type UnsplashPhotoType = BasePhotoType & {
  urls: { regular: string };
  links: { html: string };
  user: { name: string };
  created_at: string;
};

export class UnsplashPhoto extends BasePhoto {
  source: SourceType;
  url: string;
  link: string;
  photographer: string;
  created_at: string;

  constructor(data: UnsplashPhotoType) {
    super(data); // BasePhotoのコンストラクタ呼び出し
    this.source = "Unsplash";
    this.url = data.urls.regular;
    this.link = data.links.html;
    this.photographer = data.user.name;
    this.created_at = data.created_at;
  }
}
