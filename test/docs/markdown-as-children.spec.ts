import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/markdown-as-children';

test('has content', async ({ page }) => {
  await page.goto(websiteURL);

  await expect(page.locator('h2').filter({ hasText: /Dit wordt een h2 heading/i })).toBeVisible();
});
