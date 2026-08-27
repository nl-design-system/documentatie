import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/admonition-with-title';

test('renders admonition with title as spotlight section and strong label', async ({ page }) => {
  await page.goto(websiteURL);

  const spotlight = page.locator('div.utrecht-spotlight-section--ok').filter({ hasText: /Good to know/i });
  await expect(spotlight).toBeVisible();

  const title = spotlight.locator('strong').filter({ hasText: /Good to know/i });
  await expect(title).toBeVisible();
});
