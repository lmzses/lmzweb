// src/content/config.ts

import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      readTime: z.string(),
      category: z.string(),
      cover: image().optional(),
    }),
});

// Export the collections
export const collections = {
  blog: blog,
};
