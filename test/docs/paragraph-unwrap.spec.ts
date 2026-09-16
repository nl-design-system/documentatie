import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/paragraph-unwrap';

test('renders Paragraph children without nested p tags', async ({ page }) => {
  await page.goto(websiteURL);

  const leadParagraph = page.locator('p.nl-paragraph--lead');
  await expect(leadParagraph).toHaveCount(1);
  await expect(leadParagraph.locator('p')).toHaveCount(0);
  await expect(leadParagraph).toContainText('This text should not be wrapped in a nested paragraph');
});
