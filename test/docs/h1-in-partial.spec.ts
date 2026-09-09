import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/h1-in-partial';

test('renders partial body and strips its H1 heading', async ({ page }) => {
  await page.goto(websiteURL);

  await expect(page.getByText('Body text of the partial.')).toBeVisible();

  const h1 = page.getByRole('heading', { name: 'Heading that disappears', level: 1 });
  await expect(h1).toHaveCount(0);
});
