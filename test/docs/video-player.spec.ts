import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/video-player';

test('has content', async ({ page }) => {
  await page.goto(websiteURL);

  const player = page.locator('astro-island[component-export="VideoPlayer"]');
  await expect(player).toHaveCount(1);
});
