import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/div-lang-unwrap';

test('renders div lang children and removes the lang wrapper', async ({ page }) => {
  await page.goto(websiteURL);

  await expect(page.getByRole('heading', { name: 'English heading', level: 2 })).toBeVisible();
  await expect(page.getByText('English paragraph text.')).toBeVisible();

  const langDiv = page.locator('div[lang="en"]');
  await expect(langDiv).toHaveCount(0);
});
