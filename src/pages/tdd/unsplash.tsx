import { useState, useEffect, useLayoutEffect } from "react";
import { z, ZodError } from "zod";
import { mapDataToCustomFormat } from "../../features/gathering";
import { getApiUnsplashData } from "../../api/photo/getApiUnsplashData";
import { UnsplashApiSchema } from "../../ts/photo";
import TddNav from "../../components/tdd/TddNav";
import { ApiUnsplashPhoto } from "../../ts/unsplash";

const GetPexels = () => {
  const [pexelsData, setPexelsData] = useState<any>([]);
  const [pexelsDataCustom, setPexelsDataCustom] = useState<ApiUnsplashPhoto[]>([]);

  const inputData: UnsplashApiSchema = {
    word: "globe",
    num: 20, //例え30を超えてもapiが勝手に30をセットしてくれる。
  };

  useEffect(() => {
    try {
      getApiUnsplashData(inputData)
        .then((data: any) => {
          // console.log(data);
          setPexelsData(data);
        })
        .catch((error) => {
          console.error("データの取得に失敗しました。エラー:", error);
        });
    } catch (validationError) {
      console.error("入力データが無効です。エラー:", validationError);
    }
  }, []);

  useLayoutEffect(() => {
    const pexelsPhotos: ApiUnsplashPhoto[] = pexelsData.map((photo: ApiUnsplashPhoto) =>
      mapDataToCustomFormat(photo, "Unsplash")
    );
    setPexelsDataCustom(pexelsPhotos);
  }, [pexelsData]);

  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<any>(null);

const FormData = z.object({
  email: z.string().email({ message: "メールアドレスの形式ではありません。" }),
  password: z
    .string()
    .min(8, { message: "8文字以上入力してください。" })
    .max(32, { message: "32文字以下で入力してください。" }),
});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      FormData.parse(data);
      setErrors(null);
      console.log(data);
    } catch (e: any) {
      if (e instanceof ZodError) {
        setErrors(e.flatten().fieldErrors);
      } else {
        console.log(e);
      }
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <TddNav />
      <div>
        <h2>アンスプラッシュデータの実験</h2>
        <p className="text-center text-lg">(一度の検索は30件まで)</p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center gap-x-10 mb-4">
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                className="border-2 border-slate-400 rounded-md px-2 text-2xl"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">パスワード</label>
              <input
                id="password"
                name="password"
                className="border-2 border-slate-400 rounded-md px-2 text-2xl"
                value={data.password}
                onChange={handleChange}
                type="password"
              />
            </div>
          </div>
          {errors?.email && <p className="text-red-700 font-bold">{errors.email}</p>}
          {errors?.password && (
            <p className="text-red-700 font-bold">{errors.password}</p>
          )}
          <div className="mb-4">
            <button
              type="submit"
              className=" bg-green-500 text-white rounded-lg px-4 py-2"
            >
              検索
            </button>
          </div>
        </form>

        <table className="border">
          <thead className="border bg-red-400">
            <tr>
              <th>ナンバー</th>
              <th>ID</th>
              <th>Source</th>
              <th>URL</th>
              <th>Width</th>
              <th>Height</th>
              <th>Link</th>
              <th>Photographer</th>
              <th>日付</th>
            </tr>
          </thead>
          <tbody>
            {pexelsDataCustom.map((data: any, index: number) => (
              <tr key={data.id} className="border">
                <td>【{index + 1}】</td>
                <td>{data.id}</td>
                <td>{data.source}</td>
                <td>
                  <img className="w-12 h-auto" src={data.url} />
                </td>
                <td>{data.width}</td>
                <td>{data.height}</td>
                <td>
                  <a href={data.link} target="_blank">
                    {data.link}
                  </a>
                </td>
                <td>{data.photographer}</td>
                <td>{data.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GetPexels;
