import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/component-simple-props';

test('has content', async ({ page }) => {
  await page.goto(websiteURL);

  const heading = page.getByRole('heading', { name: 'Figma', level: 2 });
  await expect(heading).toBeVisible();
});
