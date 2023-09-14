export type BasePhotoType = {
  id: number;
  width: number;
  height: number;
};

export class BasePhoto {
  // クラスのプロパティ
  id: string | number;
  width: number;
  height: number;
  created_at: string;

  constructor(data: BasePhotoType) {
    this.id = data.id;
    this.width = data.width;
    this.height = data.height;
    this.created_at = "2010-01-01T01:01:01Z";
  }
}
