import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/linklist-adjacent-text';

test('renders text adjacent to an icon inside LinkListLink', async ({ page }) => {
  await page.goto(websiteURL);

  const link = page.getByRole('link', { name: /Example link text/i });
  await expect(link).toBeVisible();
});
