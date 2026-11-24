import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/private/content-test/video-player';

test('renders VideoPlayer with the lite-youtube webcomponent', async ({ page }) => {
  await page.goto(websiteURL);

  const player = page.locator('lite-youtube').first();
  await expect(player).toHaveAttribute('videoid', 'dQw4w9WgXcQ');
  await expect(player).toHaveAttribute('videotitle', 'Test video');
  await expect(player).toHaveAttribute('nocookie', '');

  // The custom element is defined and upgrades the node.
  await expect(page.evaluate(() => customElements.whenDefined('lite-youtube'))).resolves.toBeUndefined();
  await expect(player).toHaveJSProperty('nodeName', 'LITE-YOUTUBE');
});
