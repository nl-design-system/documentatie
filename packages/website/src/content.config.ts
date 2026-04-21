import type { Loader, LoaderContext } from 'astro/loaders';
import { getCollection } from 'astro:content';
import { defineCollection } from 'astro/content/config';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

type GlobOptions = Parameters<typeof glob>[0];

const hasUnderscoredSegment = (path: string) => path.split('/').some((segment) => segment.startsWith('_'));

/**
 * Extend of the build in glob to:
 * 1. Filter out entries with an underscore prefixed folder or file.
 *    The glob pattern does not allow to filter out both
 *    thus an extend was needed for a second filter pass
 * 2. Add pages with the `unlisted` flag to the global unlistedPages set. These
 *    pages won't end up in the sitemap
 */
export function customGlob(options: GlobOptions): Loader {
  const inner = glob(options);

  return {
    ...inner,
    name: 'Content Loader',
    async load(context: LoaderContext) {
      await inner.load(context);

      // After loading, remove entries whose path contains an underscore prefixed segment
      for (const [id, { data }] of context.store.entries()) {
        if (hasUnderscoredSegment(id)) {
          context.store.delete(id);
          continue;
        }

        const result = schema.safeParse(data);
        if (result.success) {
          if (result.data.title.length >= 60 && !result.data.title_sm) {
            context.logger.warn(`No title_sm provided for ${id}`);
          }

          if (result.data.unlisted) {
            globalThis.unlistedPages.add(`${id}/`);
          }
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

function generateId(options) {
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
}

const schema = z.object({
  title: z.string(),
  title_sm: z.string().max(24).optional(),
  description: z.string().optional(),
  lang: z.enum(['nl', 'en']).optional(),
  slug: z.string().optional(),
  unlisted: z.boolean().optional(),
  image: z.httpUrl().optional(),
  image_alt: z.string().optional(),
  keywords: z.array(z.string()).optional(),
  navigation_order: z.number().optional(),
});

const docs = defineCollection({
  loader: customGlob({
    base: './../../docs',
    pattern: [
      'baseline/**/!(_)*.{md,mdx}',
      'community/**/!(_)*.{md,mdx}',
      'footer/**/!(_)*.{md,mdx}',
      'handboek/**/!(_)*.{md,mdx}',
      'open-source/**/!(_)*.{md,mdx}',
      'private/**/!(_)*.{md,mdx}',
      'project/**/!(_)*.{md,mdx}',
      'richtlijnen/**/!(_)*.{md,mdx}',
      'voorbeelden/**/!(_)*.{md,mdx}',
      'woordenlijst/**/!(_)*.{md,mdx}',
    ],
    generateId,
  }),
  schema,
});

const components = defineCollection({
  loader: customGlob({
    base: './../../docs',
    pattern: ['componenten/**/!(_)*.{md,mdx}'],
    generateId,
  }),
  schema,
});

const wcag = defineCollection({
  loader: customGlob({
    base: './../../docs',
    pattern: ['wcag/**/!(_)*.{md,mdx}'],
    generateId,
  }),
  schema,
});

export const collections = { docs, wcag, components };

export const getAllCollections = async () => {
  const collectionPromises = await Promise.all([
    getCollection('components'),
    getCollection('docs'),
    getCollection('wcag'),
  ]);

  return collectionPromises.flat();
};
