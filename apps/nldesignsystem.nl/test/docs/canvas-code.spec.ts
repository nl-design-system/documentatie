import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/canvas-code';

test('renders Canvas preview from the code template string', async ({ page }) => {
  await page.goto(websiteURL);

  const example = page.locator('.ma-canvas__example').first();
  await expect(example).toBeVisible();
  await expect(example).toContainText('Hello from Canvas');
});
