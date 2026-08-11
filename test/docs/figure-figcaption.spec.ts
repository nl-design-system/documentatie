import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/figure-figcaption';

test('has content', async ({ page }) => {
  await page.goto(websiteURL);

  const figure = page.locator('figure').filter({ has: page.getByText('Bijschrift van de figuur') });
  await expect(figure).toBeVisible();

  const caption = figure.locator('figcaption');
  await expect(caption).toContainText('Bijschrift van de figuur');

  const img = figure.locator('img');
  await expect(img).toHaveAttribute('alt', 'Een diagram');
});
