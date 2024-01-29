import { Frequent } from "../../ts/frequent";

export async function createFrequent(formData: Omit<Frequent, "id">) {
  const response = await fetch(import.meta.env.VITE_kensaku_express + "/api/frequent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}