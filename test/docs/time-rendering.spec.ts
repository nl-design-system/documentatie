import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/time-rendering';

test('has content', async ({ page }) => {
  await page.goto(websiteURL);

  await expect(page.getByText('vrijdag 17 april, 10:00 - 17:00 (Den Haag)')).toBeVisible();
});
