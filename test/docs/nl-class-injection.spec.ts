import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/nl-class-injection';

test('has content', async ({ page }) => {
  await page.goto(websiteURL);

  await expect(page.getByRole('heading', { name: 'Tweede kop', level: 2 })).toHaveClass(/nl-heading--level-2/);

  const paragraph = page.locator('p.nl-paragraph', { hasText: 'Paragraft tekst met' });
  await expect(paragraph).toBeVisible();

  await expect(page.locator('strong', { hasText: 'vet' })).toHaveClass(/ma-strong/);
  await expect(page.getByRole('link', { name: 'een link' })).toHaveClass(/nl-link/);
  await expect(page.locator('ul', { hasText: 'lijst item' })).toHaveClass(/ams-unordered-list/);
  await expect(page.locator('blockquote', { hasText: 'Een blockquote' })).toHaveClass(/utrecht-blockquote/);
  await expect(page.locator('pre', { hasText: 'code block' })).toHaveClass(/nl-code-block/);
});
