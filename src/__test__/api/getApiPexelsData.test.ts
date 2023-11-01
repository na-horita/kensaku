import {
  getApiPexelsData,
  validateResponse,
} from "../../api/photo/getApiPexelsData";

describe("validateResponseのテスト", () => {
  it("正常なレスポンスはエラーをスローしない", () => {
    const response = { status: 200 };
    expect(() => validateResponse(response)).not.toThrow();
  });

  it("nullのレスポンスはエラーをスローする", () => {
    const response = null;
    expect(() => validateResponse(response)).toThrow("Responseがありません");
  });

  it("ステータスコードが200以外のレスポンスはエラーをスローする", () => {
    const response = { status: 404 };
    expect(() => validateResponse(response)).toThrow("200番ではありません");
  });
});


describe("getApiPexelsDataのテスト", () => {
  it("api pexels 基本", async () => {
    const result = await getApiPexelsData({ word: "cat", num: 10 });
    expect(result).not.toBeNull();
    expect(result).toHaveLength(10);
  });

  it("api pexels 80件呼び出しまで", async () => {
    let result = await getApiPexelsData({ word: "cat", num: 1 });
    expect(result).not.toBeNull();
    expect(result).toHaveLength(1);
    result = await getApiPexelsData({ word: "cat", num: 80 });
    expect(result).not.toBeNull();
    expect(result).toHaveLength(80);
    result = await getApiPexelsData({ word: "cat", num: 90 });
    expect(result).not.toBeNull();
    expect(result).toHaveLength(80);
  });

  it("api pexels 90件呼び出し0件", async () => {
    const result = await getApiPexelsData({ word: "cat", num: 0 });
    expect(result).not.toBeNull();
    expect(result).not.toHaveLength(0);
  });

  it("api pexels プロパティチェック", async () => {
    const result = await getApiPexelsData({ word: "cat", num: 25 });
    expect(result).not.toBeNull();
    result && expect(result[0]).toHaveProperty("photographer");
    result && expect(result[0]).toHaveProperty("width");
    result && expect(result[0]).not.toHaveProperty("created_at");
  });
});
