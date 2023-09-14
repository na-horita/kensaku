import { BasePhoto, BasePhotoType } from "./BasePhoto";

describe("BasePhoto", () => {
  it("正しいプロパティを持つインスタンスを作成できること", () => {
    const dataFromPexels: BasePhotoType = {
      id: 123,
      width: 800,
      height: 600,
    };
    const basePhotoInstance = new BasePhoto(dataFromPexels);

    expect(basePhotoInstance.id).toBe(123);
    expect(basePhotoInstance.width).toBe(800);
    expect(basePhotoInstance.height).toBe(600);
    expect(basePhotoInstance.height).not.toBe(400);
    expect(basePhotoInstance.created_at).toBe("2010-01-01T01:01:01Z");
  });
});

