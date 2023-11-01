import { z } from "zod";

// Zodを使用してnumのバリデーションスキーマを作成
export const numPexelsSchema = z
  .number()
  .int()
  .min(1, "numの数値は1以上である必要があります")
  .max(80, "numの数値は80以下である必要があります");

export const wordSchema = z
  .string()
  .min(1, "wordは1文字以上である必要があります")
  .max(10, "wordは10文字以下である必要があります")
  .regex(/^[a-zA-Z0-9]*$/, "英語と数値のみが許可されています");
