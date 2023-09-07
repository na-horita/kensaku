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
  apiKey: string,
};

// オブジェクトのスキーマを定義
export const pexelsApiSchema = z.object({
  word: z.string(),
  num: z.number().min(1).max(80),
  apiKey: z.string(),
});

export const unsplashApiSchema = z.object({
  word: z.string(),
  num: z.number().min(1).max(30),
  apiKey: z.string(),
});