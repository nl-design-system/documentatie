import { expect, test } from '@playwright/test';

const candidateComponentPage = 'http://localhost:4321/button/';

test('Renders aliases in a Candidate component page', async ({ page }) => {
  await page.goto(candidateComponentPage);

  await expect(page.getByText('Ook bekend als: Knop, Action, Call to Action.')).toBeVisible();
});
