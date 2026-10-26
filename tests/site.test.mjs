import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from 'playwright';

test('landing page, mobile layout, navigation and inactive integrations', async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    const errors = [];
    const trackingRequests = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('request', request => {
      if (/facebook|connect\.facebook|wa\.me|whatsapp/.test(request.url())) trackingRequests.push(request.url());
    });
    for (const width of [1440, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 900 });
      const response = await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
      assert.equal(response.status(), 200);
      assert.equal(await page.locator('h1').count(), 1);
      assert.equal(await page.locator('html').getAttribute('lang'), 'id');
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Overflow at ${width}px`);
      const photo = page.getByAltText('Botol Az-Zait Assyfa berlabel emas dengan kotak kemasan di belakangnya');
      assert.ok(await photo.evaluate(img => img.complete && img.naturalWidth > 0));
      await page.getByRole('link', { name: 'Info pemesanan' }).click();
      assert.equal(new URL(page.url()).hash, '#pemesanan');
      assert.ok(await page.getByText('Pemesanan segera tersedia').isVisible());
      const question = page.locator('summary').first();
      await question.focus();
      await page.keyboard.press('Enter');
      assert.equal(await page.locator('details').first().getAttribute('open'), '');
      await page.screenshot({ path: `test-results/home-${width}.png`, fullPage: true });
    }
    await page.getByRole('link', { name: 'Privasi', exact: true }).click();
    await page.waitForURL('**/privasi');
    assert.equal(await page.locator('h1').innerText(), 'Privasi Anda.');
    assert.deepEqual(errors, []);
    assert.deepEqual(trackingRequests, []);
  } finally { await browser.close(); }
});
