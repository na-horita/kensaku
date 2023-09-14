type BasicData = {
  id: number;
  width: number;
  height: number;
}

class BasePhoto {
  // クラスのプロパティ
  id: number;
  width: number;
  height: number;

  constructor(data: BasicData) {
    this.id = data.id;
    this.width = data.width;
    this.height = data.height;
  }
}

// 使用例
const dataFromPexels: BasicData = {
  id: 123,
  width: 800,
  height: 600,
  // 他のプロパティもここでセット
};

const basePhotoInstance = new BasePhoto(dataFromPexels);

console.log(basePhotoInstance); // BasePhoto インスタンスの詳細を表示
