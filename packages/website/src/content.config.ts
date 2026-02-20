import { defineCollection } from 'astro/content/config';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const docs = defineCollection({
  loader: glob({
    base: './../../docs',
    pattern: ['baseline/**/!(_)(*).{md,mdx}', 'community/**/!(_)(*).{md,mdx}'],
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    unlisted: z.boolean().optional(),
  }),
});

export const collections = { docs };
