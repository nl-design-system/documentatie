import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/component-json-props';

test('has content', async ({ page }) => {
  await page.goto(websiteURL);

  const paragraph = page.locator('p').filter({ hasText: /^Deze tekst is rood$/ });
  await expect(paragraph).toBeVisible();
  await expect(paragraph).toHaveCSS('color', 'rgb(206, 44, 49)');
});
