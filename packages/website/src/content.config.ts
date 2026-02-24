import type { Loader, LoaderContext } from 'astro/loaders';
import { defineCollection } from 'astro/content/config';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

type GlobOptions = Parameters<typeof glob>[0];

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

/**
 * Get the slug from the frontmatter.
 */
function getSlug(options): string | null {
  // Return early when the path contains an underscore prefixed segment. These
  // files should be ignored
  if (hasUnderscoredSegment(options.entry)) return null;

  if (options.data.slug) {
    return options.data.slug.startsWith('/')
      ? options.data.slug // if the slug starts with a `/` use it as is
      : options.entry // else replace the last segment of the path with the slug
          .split('/')
          .reverse()
          .toSpliced(0, 1, options.data.slug)
          .reverse()
          .join('/');
  }

  return null;
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
      'project/**/*.{md,mdx}',
      'richtlijnen/**/*.{md,mdx}',
      'voorbeelden/**/*.{md,mdx}',
      'wcag/**/*.{md,mdx}',
      'woordenlijst/**/*.{md,mdx}',
    ],
    generateId: (options) => {
      let filename = options.entry;

      // remove file extensions
      filename = filename.replace(/.mdx$/, '');
      filename = filename.replace(/.md$/, '');

      // Make readme's the overview page
      filename = filename.replace(/\/readme/i, '');

      // remove leading ordering number in file segment
      filename = filename
        .split('/')
        .map((segment) => segment.replace(/^\d+-/, ''))
        .join('/');

      return getSlug(options) || filename;
    },
  }),
  schema: z.object({
    title: z.string().optional(),
    slug: z.string().optional(),
    unlisted: z.boolean().optional(),
  }),
});

export const collections = { docs };
