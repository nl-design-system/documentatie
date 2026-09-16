import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/hreflang-translations-en';

test('renders hreflang link tags for paired translations (en side)', async ({ page }) => {
  await page.goto(websiteURL);

  const selfLink = page.locator('link[rel="alternate"][hreflang="en"]');
  await expect(selfLink).toHaveAttribute(
    'href',
    'https://nldesignsystem.nl/private/content-test/hreflang-translations-en/',
  );

  const nlLink = page.locator('link[rel="alternate"][hreflang="nl"]');
  await expect(nlLink).toHaveAttribute('href', 'https://nldesignsystem.nl/private/content-test/hreflang-translations/');

  const xDefaultLink = page.locator('link[rel="alternate"][hreflang="x-default"]');
  await expect(xDefaultLink).toHaveAttribute(
    'href',
    'https://nldesignsystem.nl/private/content-test/hreflang-translations/',
  );
});

test('html lang attribute matches frontmatter lang', async ({ page }) => {
  await page.goto(websiteURL);

  const html = page.locator('html');
  await expect(html).toHaveAttribute('lang', 'en');
});
