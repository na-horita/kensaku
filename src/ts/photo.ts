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

// オブジェクトのスキーマを定義
export const pexelsApiSchema = z.object({
  word: z.string(),
  num: z.number().min(1).max(80),
});

export const unsplashApiSchema = z.object({
  word: z.string(),
  num: z.number().min(1).max(30),
});

// ZodスキーマからTypeScript型を抽出
export type PexelsApiSchema = z.infer<typeof pexelsApiSchema>;
export type UnsplashApiSchema = z.infer<typeof pexelsApiSchema>;