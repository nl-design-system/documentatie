import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/canvas-arrow-function';

test('has content', async ({ page }) => {
  await page.goto(websiteURL);

  const example = page.locator('.ma-canvas-astro__example');
  await expect(example).toBeVisible();
  await expect(example).toContainText('Hello from Canvas');
});
