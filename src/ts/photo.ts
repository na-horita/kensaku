export type SourceType = "Unsplash" | "Pexels";
import { z } from "zod";

export type Photo = {
  id: string;
  source: SourceType;
  width: number;
  height: number;
  url: string;
  link: string;
  photographer: string;
  created_at?: string;
}; 

// Pexels APIのリクエスト
export type GetPexelsData = { 
  word: string,
  num: number,
};

// オブジェクトのスキーマを定義
export const pexelsApiSchema = z.object({
  word: z.string(),
  num: z
    .number()
    .min(1)
    .max(80)
    .refine((num) => num !== 0, {
      message: "数値は0であってはいけません。",
    })
    .refine((num) => num <= 80, {
      message: "数値は80以下である必要があります。",
    }),
});

export const unsplashApiSchema = z.object({
  word: z.string(),
  num: z
    .number()
    .min(1)
    .max(30)
    .refine((num) => num !== 0, {
      message: "数値は0であってはいけません。",
    })
    .refine((num) => num <= 30, {
      message: "数値は30以下である必要があります。",
    }),
});

// ZodスキーマからTypeScript型を抽出
export type PexelsApiSchema = z.infer<typeof pexelsApiSchema>;
export type UnsplashApiSchema = z.infer<typeof pexelsApiSchema>;