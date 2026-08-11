import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/frontmatter-keys';

test('has content', async ({ page }) => {
  await page.goto(websiteURL);

  await expect(page).toHaveTitle(/Korte titel/);

  const ogImage = page.locator('meta[property="og:image"]');
  await expect(ogImage).toHaveAttribute(
    'content',
    'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/og-image.png',
  );

  const ogImageAlt = page.locator('meta[property="og:image:alt"]');
  await expect(ogImageAlt).toHaveAttribute('content', 'Beschrijving van de afbeelding');
});
