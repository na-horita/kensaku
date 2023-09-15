import { z } from "zod";
import { PexelsPhoto } from "../class/PexelsPhoto";
import { UnsplashPhoto } from "../class/UnsplashPhoto";

// PexelsPhotoとUnsplashPhotoの型は同じになるように作成してます。２つともclassコンポーネントにて設定
export type Photo = PexelsPhoto | UnsplashPhoto;

//今のデータがどのソース名であるのかを明示的にする
export type SourceType = "Unsplash" | "Pexels";

//第一引数のソース名からdataの型を振り分ける
export type PexelsJadgeAlias<
  T extends SourceType,
  A_Data extends Object,
  B_Data extends Object
> = T extends "Pexels" ? A_Data : B_Data;

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