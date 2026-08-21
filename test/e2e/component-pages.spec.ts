import { expect, test } from '@playwright/test';

const candidateComponentPage = 'http://localhost:4321/button/';
const componentPageWithAnatomy = 'http://localhost:4321/heading-1/';

test('Renders aliases in a Candidate component page', async ({ page }) => {
  await page.goto(candidateComponentPage);

  await expect(page.getByText('Ook bekend als: Knop, Action, Call to Action.')).toBeVisible();
});

test('Renders Anatomy in a Candidate component page', async ({ page }) => {
  await page.goto(componentPageWithAnatomy);

  // Figure wrapper exists
  const figure = page.locator('figure.ma-component-anatomy');
  await expect(figure).toBeVisible();

  // Legend: ordered list rendered with content
  const figcaption = figure.locator('figcaption');
  await expect(figcaption.locator('ol')).toBeVisible();
  await expect(figcaption.locator('li')).toHaveText(['Heading 1']);
});
