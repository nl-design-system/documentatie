import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/h1-in-partial';

test('has content', async ({ page }) => {
  await page.goto(websiteURL);

  await expect(page.getByText('Body tekst van de partial.')).toBeVisible();

  const h1 = page.getByRole('heading', { name: 'Heading die verdwijnt', level: 1 });
  await expect(h1).toHaveCount(0);
});
