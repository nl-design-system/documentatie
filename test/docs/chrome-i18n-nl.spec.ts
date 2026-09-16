import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/chrome-i18n-nl';

test('renders Dutch chrome strings when lang is nl', async ({ page }) => {
  await page.goto(websiteURL);

  await expect(page.locator('html')).toHaveAttribute('lang', 'nl');

  const skipLink = page.getByRole('link', { name: 'Naar de inhoud' });
  await expect(skipLink).toBeVisible();

  const mainNavLabel = page.locator('#hoofdnavigatie-label');
  await expect(mainNavLabel).toHaveText('Hoofdmenu');

  const footerNavLabel = page.locator('#site-navigatie-label');
  await expect(footerNavLabel).toHaveText('Submenu');

  const logoLink = page.locator('.ma-page-header__center a');
  await expect(logoLink).toHaveAttribute('aria-label', 'Logo van NL Design System, naar de homepage');

  const searchLink = page.locator('.ma-to-search-link');
  await expect(searchLink).toContainText('Zoeken');

  const mobileMenuTrigger = page.locator('.ma-mobile-menu-trigger');
  await expect(mobileMenuTrigger).toContainText('Menu');
});
