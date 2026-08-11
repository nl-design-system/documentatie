import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/component-text-expression';

test('has content', async ({ page }) => {
  await page.goto(websiteURL);

  const link = page.getByRole('link', { name: /Meld je aan/i });
  await expect(link).toBeVisible();
});
