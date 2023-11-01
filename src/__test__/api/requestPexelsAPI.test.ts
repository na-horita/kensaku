import {
  requestPexelsAPI,
} from "../../api/photo/getApiPexelsData";

import axios from "axios";
const pexelsAPIKey = import.meta.env.VITE_REACT_APP_API_pexels;

describe("requestPexelsAPIのテスト", () => {

  it("実際に外部APIにリクエストできる", async () => {
    // 実際のwordと数値を指定
    const word = "cat";
    const num = 10;

    // 関数を呼び出す
    const response = await requestPexelsAPI(word, num);

    // レスポンスが成功していることを検証
    expect(response.status).toBe(200);

    // データが取得できていることを検証
    expect(response.data.photos).toBeInstanceOf(Array);
    expect(response.data.photos.length).toBeGreaterThan(0);
  });

  it("正しいパラメータでリクエストできる", async () => {
    const mockRes = {
      data: {
        photos: [
          { id: 1, src: { original: "url1" } },
          { id: 2, src: { original: "url2" } },
          { id: 3, src: { original: "url3" } },
        ],
      },
    };

    vi.spyOn(axios, "get").mockResolvedValue(mockRes);

    const res = await requestPexelsAPI("cat", 10);

    expect(axios.get).toHaveBeenCalledWith(
      "https://api.pexels.com/v1/search?query=cat&per_page=10",
      {
        headers: {
          Authorization: pexelsAPIKey,
        },
      }
    );
    expect(res.data.photos).toEqual(mockRes.data.photos);
  });

  it("不正なパラメータであれば例外をスローする", async () => {
    const invalidParam = {
      word: "cat",
      num: "abcdefg",
    };

    vi.spyOn(axios, "get").mockRejectedValue(new Error("Invalid param"));

    await expect(
      requestPexelsAPI(invalidParam.word, invalidParam.num as unknown as number)
    ).rejects.toThrow("Invalid param");
  });
});
