import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/canvas';

test('renders Canvas preview from children', async ({ page }) => {
  await page.goto(websiteURL);

  const example = page.locator('.ma-canvas__example').first();
  await expect(example).toBeVisible();
  await expect(example).toContainText('Hello from Canvas');
});

test('renders code from the code attribute instead of the children', async ({ page }) => {
  await page.goto(websiteURL);

  const canvas = page.locator('.ma-canvas').filter({ hasText: 'existing' });
  const code = canvas.locator('pre.ma-canvas__code-highlight-large:not([hidden]) code');

  await expect(canvas).toHaveCount(1);
  await expect(code).toContainText('existing <em>code</em> attr</p>');
});
