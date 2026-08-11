import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/anchor-link';

test('has content', async ({ page }) => {
  await page.goto(websiteURL);

  const link = page.getByRole('link', { name: 'sectie over testen' });
  await expect(link).toHaveAttribute('href', /#test-sectie$/);

  const heading = page.locator('h2#test-sectie');
  await expect(heading).toBeVisible();
});
