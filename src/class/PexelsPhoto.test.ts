import { PexelsPhoto, PexelsPhotoType } from "./PexelsPhoto";

describe("PexelsPhoto", () => {
  it("PexelsPhotoインスタンスを正しく作成できること", () => {
    // PexelsPhotoのデータ
    const data: PexelsPhotoType = {
      id: 123,
      width: 800,
      height: 600,
      src: { large2x: "https://example.com/image.jpg" },
      url: "https://example.com/photo/123",
      photographer: "John Doe",
    };

    // PexelsPhotoインスタンスを作成
    const pexelsPhoto = new PexelsPhoto(data);

    // 各プロパティが正しい値を持つことを確認
    expect(pexelsPhoto.id).toBe(data.id);
    expect(pexelsPhoto.source).toBe("Pexels");
    expect(pexelsPhoto.width).toBe(data.width);
    expect(pexelsPhoto.height).toBe(data.height);
    expect(pexelsPhoto.url).toBe(data.src.large2x);
    expect(pexelsPhoto.link).toBe(data.url);
    expect(pexelsPhoto.photographer).toBe(data.photographer);
    expect(pexelsPhoto.created_at).toBe("2010-01-01T01:01:01Z");
  });
});
