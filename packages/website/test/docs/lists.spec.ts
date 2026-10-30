import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/lists';

test('Test the correct rendering of lists', async ({ page }) => {
  await page.goto(websiteURL);

  const orderedList = page.getByRole('list').filter({ hasText: 'Maak eerst een volledig overzicht' });
  await expect(orderedList).toHaveClass(/utrecht-ordered-list/);

  const nestedUnorderedList = orderedList.locator('ul');
  await expect(nestedUnorderedList).toHaveClass(/ams-unordered-list/);

  // nested unordered-list items must not inherit ordered-list item classes
  await expect(nestedUnorderedList.locator('li').first()).toHaveClass(/ams-unordered-list__item/);
  await expect(nestedUnorderedList.locator('li.utrecht-ordered-list__item')).toHaveCount(0);
});
