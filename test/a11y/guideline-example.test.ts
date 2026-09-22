import { expect, test, type Page } from '@playwright/test';
import * as cheerio from 'cheerio';
import { readFileSync } from 'fs';
import { shouldSkipRoute } from './test-setup';

/**
 * Een voorbeeld van hoe het niet moet, hoort geen echte fout op de pagina te zetten.
 * Canvas houdt zo'n voorbeeld daarom buiten de toegankelijkheidsboom en buiten de
 * tabvolgorde. Deze test bewaakt dat: komt er een voorbeeld terug dat wel bereikbaar
 * is, dan staat er een knop, een invoerveld of een kop in de pagina die er niet hoort.
 */

const CONFIG = {
  baseUrl: 'http://localhost:3000',
  sitemapPath: './build/sitemap.xml',
};

test.describe('Voorbeelden van hoe het niet moet', () => {
  const pathnames = getPathnamesFromSitemap(CONFIG.sitemapPath).filter((pathname) => !shouldSkipRoute(pathname));

  pathnames.forEach((pathname) => {
    test(pathname, async ({ page }) => {
      await verifyHiddenExamples(page, pathname);
    });
  });
});

function getPathnamesFromSitemap(sitemapPath: string): string[] {
  try {
    const sitemap = readFileSync(sitemapPath, 'utf8');
    const $ = cheerio.load(sitemap, { xmlMode: true });

    return Array.from(
      new Set(
        $('loc')
          .map((_, element) => $(element).text())
          .toArray()
          .map((url) => new URL(url).pathname),
      ),
    );
  } catch (error) {
    console.warn(`Could not read sitemap at ${sitemapPath}, skipping tests generation.`, error);
    return [];
  }
}

async function verifyHiddenExamples(page: Page, pathname: string): Promise<void> {
  await page.goto(CONFIG.baseUrl + pathname, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(isDocusaurusHydrated, { timeout: 10000 });

  const problems = await page.evaluate(() => {
    const examples = Array.from(document.querySelectorAll('.nlds-guideline--dont .nlds-canvas__example'));
    const focusable = 'a[href], button, input, select, textarea, [tabindex]';

    return examples.flatMap((example) => {
      const found: string[] = [];

      if (!example.hasAttribute('inert')) {
        found.push('voorbeeldvlak zonder inert');
      }
      if (example.getAttribute('aria-hidden') !== 'true') {
        found.push('voorbeeldvlak zonder aria-hidden');
      }
      example.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((heading) => {
        if (!heading.closest('[aria-hidden="true"]')) {
          found.push(`kop in de toegankelijkheidsboom: ${heading.tagName}`);
        }
      });
      if (!example.hasAttribute('inert')) {
        example.querySelectorAll(focusable).forEach((element) => {
          found.push(`bedienbaar element in de tabvolgorde: ${element.tagName}`);
        });
      }

      return found;
    });
  });

  expect(problems).toEqual([]);
}

function isDocusaurusHydrated(): boolean {
  return document.documentElement.dataset.hasHydrated === 'true';
}
