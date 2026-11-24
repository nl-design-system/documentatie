import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/hreflang-no-translations';

test('renders only self and x-default when no translations set', async ({ page }) => {
  await page.goto(websiteURL);

  const selfLink = page.locator('link[rel="alternate"][hreflang="en"]');
  await expect(selfLink).toHaveAttribute(
    'href',
    'https://nldesignsystem.nl/private/content-test/hreflang-no-translations/',
  );

  const xDefaultLink = page.locator('link[rel="alternate"][hreflang="x-default"]');
  await expect(xDefaultLink).toHaveAttribute(
    'href',
    'https://nldesignsystem.nl/private/content-test/hreflang-no-translations/',
  );

  const nlLink = page.locator('link[rel="alternate"][hreflang="nl"]');
  await expect(nlLink).toHaveCount(0);
});

test('html lang attribute matches frontmatter lang', async ({ page }) => {
  await page.goto(websiteURL);

  const html = page.locator('html');
  await expect(html).toHaveAttribute('lang', 'en');
});
