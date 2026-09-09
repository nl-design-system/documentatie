import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/figure-figcaption';

test('renders figure with figcaption and image', async ({ page }) => {
  await page.goto(websiteURL);

  const figure = page.locator('figure').filter({ has: page.getByText('Caption of the figure') });
  await expect(figure).toBeVisible();

  const caption = figure.locator('figcaption');
  await expect(caption).toContainText('Caption of the figure');

  const img = figure.locator('img');
  await expect(img).toHaveAttribute('alt', 'A diagram');
});
