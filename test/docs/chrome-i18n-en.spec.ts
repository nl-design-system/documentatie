import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/chrome-i18n-en';

test('renders English chrome strings when lang is en', async ({ page }) => {
  await page.goto(websiteURL);

  await expect(page.locator('html')).toHaveAttribute('lang', 'en');

  const skipLink = page.getByRole('link', { name: 'To main content' });
  await expect(skipLink).toBeVisible();

  const mainNavLabel = page.locator('#hoofdnavigatie-label');
  await expect(mainNavLabel).toHaveText('Main menu');

  const footerNavLabel = page.locator('#site-navigatie-label');
  await expect(footerNavLabel).toHaveText('Submenu');

  const logoLink = page.locator('.ma-page-header__center a');
  await expect(logoLink).toHaveAttribute('aria-label', 'Logo of NL Design System, to the homepage');

  const searchLink = page.locator('.ma-to-search-link');
  await expect(searchLink).toContainText('Search');

  const mobileMenuTrigger = page.locator('.ma-mobile-menu-trigger');
  await expect(mobileMenuTrigger).toContainText('Menu');
});
