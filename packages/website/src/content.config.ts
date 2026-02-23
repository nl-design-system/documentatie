import type { Loader, LoaderContext } from 'astro/loaders';
import { defineCollection } from 'astro/content/config';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const hasUnderscoredSegment = (path: string) => path.split('/').some((segment) => segment.startsWith('_'));

/**
 * Extend of the build in glob to filter out entries with an underscore
 * prefixed folder or file. The glob pattern does not allow to filter out both
 * thus an extend was needed for a second filter pass
 */
export function globIgnoringUnderscores(options: GlobOptions): Loader {
  const inner = glob(options);

  return {
    ...inner,
    async load(context: LoaderContext) {
      await inner.load(context);

      // After loading, remove entries whose path contains an underscore prefixed segment
      for (const [id] of context.store.entries()) {
        if (hasUnderscoredSegment(id)) {
          context.store.delete(id);
        }
      }
    },
  };
}

const docs = defineCollection({
  loader: globIgnoringUnderscores({
    base: './../../docs',
    pattern: [
      'baseline/**/*.{md,mdx}',
      'community/**/*.{md,mdx}',
      // 'componenten/**/*.{md,mdx}',
      'footer/**/*.{md,mdx}',
      'handboek/**/*.{md,mdx}',
      'open-source/**/*.{md,mdx}',
      'private/**/*.{md,mdx}',
      // 'project/**/*.{md,mdx}',
      // 'richtlijnen/**/*.{md,mdx}',
      'voorbeelden/**/*.{md,mdx}',
      // 'wcag/**/*.{md,mdx}',
      'woordenlijst/**/*.{md,mdx}',
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
