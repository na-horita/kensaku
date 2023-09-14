import { z } from "zod";

const BasicImageSchema = z.object({
  total: z.number(),
  total_pages: z.number(),
});

const PhotoSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  urls: z.object({
    regular: z.string(),
  }),
  links: z.object({
    html: z.string(),
  }),
  user: z.object({
    name: z.string(),
  }),
  created_at: z.string().optional(),
});

export const ImagesSchemaWithPhotos = BasicImageSchema.extend({
  results: z.array(PhotoSchema),
});

export type UnsplashPhoto = z.infer<typeof PhotoSchema>;

export type UnsplashImagesResults = z.infer<typeof ImagesSchemaWithPhotos>;
