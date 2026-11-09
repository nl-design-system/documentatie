import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/escaped-import';

test('resolves partial import with escaped underscore in path', async ({ page }) => {
  await page.goto(websiteURL);

  await expect(page.getByText('Escaped partial content rendered.')).toBeVisible();
});
