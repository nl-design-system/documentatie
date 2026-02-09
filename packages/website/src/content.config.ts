// import { defineCollection } from 'astro:content';
import { defineCollection } from 'astro/content/config';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const baseline = defineCollection({
  loader: glob({ base: './../../docs/baseline', pattern: ['**/*.md', '**/*.mdx'] }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { baseline };
