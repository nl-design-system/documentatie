import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/';

test.use({ viewport: { width: 500, height: 844 } });

test.describe('Mobile menu', () => {
  test('First ', async ({ page }) => {
    await page.goto(websiteURL);

    const link = page.locator('.denhaag-side-navigation__link').first();
    await expect(link).not.toBeVisible();

    await page.getByRole('button', { name: 'Menu' }).click();

    await expect(link).toBeVisible();
  });
});
