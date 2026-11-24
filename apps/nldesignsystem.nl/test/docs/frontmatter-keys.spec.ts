import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/frontmatter-keys';

test('uses title_sm, image and image_alt frontmatter in document head', async ({ page }) => {
  await page.goto(websiteURL);

  await expect(page).toHaveTitle(/Short title/);

  const ogImage = page.locator('meta[property="og:image"]');
  await expect(ogImage).toHaveAttribute(
    'content',
    'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/og-image.png',
  );

  const ogImageAlt = page.locator('meta[property="og:image:alt"]');
  await expect(ogImageAlt).toHaveAttribute('content', 'Description of the image');
});
