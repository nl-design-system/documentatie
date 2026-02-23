import { defineCollection } from 'astro/content/config';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const docs = defineCollection({
  loader: glob({
    base: './../../docs',
    pattern: [
      'baseline/**/!(_)(*).{md,mdx}',
      'community/**/!(_)(*).{md,mdx}',
      // 'componenten/**/!(_)(*).{md,mdx}',
      'footer/**/!(_)(*).{md,mdx}',
      'handboek/**/!(_)(*).{md,mdx}',
      'open-source/**/!(_)(*).{md,mdx}',
      'private/**/!(_)(*).{md,mdx}',
      // 'project/**/!(_)(*).{md,mdx}',
      // 'richtlijnen/**/!(_)(*).{md,mdx}',
      'voorbeelden/**/!(_)(*).{md,mdx}',
      // 'wcag/**/!(_)(*).{md,mdx}',
      'woordenlijst/**/!(_)(*).{md,mdx}',
    ],
    generateId: (options) => {
      let id = options.entry;

      // remove file extensions
      id = id.replace(/.mdx$/, '');
      id = id.replace(/.md$/, '');

      // Make readme's the overview page
      id = id.replace(/\/readme/i, '');

      // remove leading ordering number in file segment
      id = id
        .split('/')
        .map((segment) => segment.replace(/^\d+-/, ''))
        .join('/');

      return id;
    },
  }),
  schema: z.object({
    title: z.string().optional(),
    slug: z.string().optional(),
    unlisted: z.boolean().optional(),
  }),
});

export const collections = { docs };
