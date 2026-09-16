import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/anchor-link';

test('renders anchor link and resolves custom header id', async ({ page }) => {
  await page.goto(websiteURL);

  const link = page.getByRole('link', { name: 'section about testing' });
  await expect(link).toHaveAttribute('href', /#custom-id$/);

  const heading = page.locator('h2#custom-id');
  await expect(heading).toBeVisible();
});
