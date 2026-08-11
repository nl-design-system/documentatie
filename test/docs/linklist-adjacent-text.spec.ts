import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/linklist-adjacent-text';

test('has content', async ({ page }) => {
  await page.goto(websiteURL);

  const link = page.getByRole('link', { name: /Voorbeeld link tekst/i });
  await expect(link).toBeVisible();
});
