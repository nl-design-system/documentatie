import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/component-text-expression';

test('renders text expression as child of ButtonLink next to an icon', async ({ page }) => {
  await page.goto(websiteURL);

  const link = page.getByRole('link', { name: /Sign up/i });
  await expect(link).toBeVisible();
});
