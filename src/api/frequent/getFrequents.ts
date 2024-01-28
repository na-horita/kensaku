import { Frequent } from "../../ts/frequent";

export const getFrequents = async () => {
  try {
    const response = await fetch("https://kensaku-express.vercel.app/api/frequent", {
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data:Frequent[] = await response.json();
    return data;
  } catch (error) {
    // エラーハンドリング
    console.error("Error:", error);
    throw error; // 必要に応じてエラーを再スローするか、適切な処理を行います。
  }
};
