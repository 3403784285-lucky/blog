import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    columns: z.array(z.string()).default(["uncategory"]),
    published: z.string().refine((arg) => arg.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)$/)),
  }),
});

export const collections = {
  posts: postsCollection,
};

