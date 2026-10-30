import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/code-block-meta';

test('renders code block content with meta information', async ({ page }) => {
  await page.goto(websiteURL);

  const pre = page.locator('pre').filter({ hasText: 'name' });
  await expect(pre).toBeVisible();
  await expect(pre).toContainText('test');
});
