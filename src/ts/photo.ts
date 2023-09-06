export type SourceType = "Unsplash" | "Pexels";

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