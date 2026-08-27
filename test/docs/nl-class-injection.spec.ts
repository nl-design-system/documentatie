import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/nl-class-injection';

test('injects NL Design System classes on native markdown elements', async ({ page }) => {
  await page.goto(websiteURL);

  await expect(page.getByRole('heading', { name: 'Second heading', level: 2 })).toHaveClass(/nl-heading--level-2/);

  const paragraph = page.locator('p.nl-paragraph', { hasText: 'Paragraph text with' });
  await expect(paragraph).toBeVisible();

  await expect(page.locator('strong', { hasText: 'bold' })).toHaveClass(/ma-strong/);
  await expect(page.getByRole('link', { name: 'a link' })).toHaveClass(/nl-link/);
  await expect(page.locator('ul', { hasText: 'list item' })).toHaveClass(/ams-unordered-list/);
  await expect(page.locator('blockquote', { hasText: 'A blockquote' })).toHaveClass(/utrecht-blockquote/);
  await expect(page.locator('pre', { hasText: 'code block' })).toHaveClass(/nl-code-block/);
});
