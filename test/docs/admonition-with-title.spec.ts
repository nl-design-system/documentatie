import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/admonition-with-title';

test('has content', async ({ page }) => {
  await page.goto(websiteURL);

  const spotlight = page.locator('div.utrecht-spotlight-section--ok').filter({ hasText: /Goed om te weten/i });
  await expect(spotlight).toBeVisible();

  const title = spotlight.locator('strong').filter({ hasText: /Goed om te weten/i });
  await expect(title).toBeVisible();
});
