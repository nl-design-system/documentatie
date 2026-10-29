import { readFileSync } from 'node:fs';
import * as cheerio from 'cheerio';

export function getPathnamesFromSitemap(sitemapDir: string, sitemapPath: string): string[] {
  const paths: string[] = [];

  try {
    const sitemapIndex = readFileSync(`${sitemapDir}${sitemapPath}`, 'utf8');
    const $ = cheerio.load(sitemapIndex, { xmlMode: true });

    $('sitemap loc')
      .map((_, element) => $(element).text())
      .toArray()
      .map((url) => new URL(url).pathname)
      .forEach((path) => {
        getPathnamesFromSitemap(sitemapDir, path).forEach((p) => paths.push(p));
      });

    $('url loc')
      .map((_, element) => $(element).text())
      .toArray()
      .map((url) => new URL(url).pathname)
      .forEach((path) => paths.push(path));

    return Array.from(new Set(paths));
  } catch (error) {
    console.warn(`Could not read sitemap at ${sitemapDir}${sitemapPath}, skipping tests generation.`, error);
    return [];
  }
}
