import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/markdown-as-children';

test('renders markdown as children of a component', async ({ page }) => {
  await page.goto(websiteURL);

  await expect(page.locator('h2').filter({ hasText: /This is an h2 heading/i })).toBeVisible();

  await expect(page.locator('p').filter({ hasText: /This is a paragraph/i })).toBeVisible();

  await expect(page.locator('li').filter({ hasText: /this is a list/i })).toBeVisible();

  await expect(page.locator('a').filter({ hasText: /A link/i })).toHaveClass('nl-link');
});
