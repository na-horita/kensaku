import { getApiPexelsData } from "../../api/photo/getApiPexelsData"; // テスト対象の関数をインポート
test("api pexels 基本", async () => {
  const result = await getApiPexelsData({ word: "cat", num: 10 });
  expect(result).not.toBeNull();
  expect(result).toHaveLength(10);
});

test("api pexels 80件呼び出しまで", async () => {
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

test("api pexels 90件呼び出し0件", async () => {
  const result = await getApiPexelsData({ word: "cat", num: 0 });
  expect(result).not.toBeNull();
  expect(result).not.toHaveLength(0);
});

test("api pexels プロパティチェック", async () => {
  const result = await getApiPexelsData({ word: "cat", num: 20 });
  expect(result).not.toBeNull();
  result && expect(result[0]).toHaveProperty("photographer");
  result && expect(result[0]).toHaveProperty("width");
  result && expect(result[0]).not.toHaveProperty("created_at");
});

