// @ts-check
const { test, expect, firefox} = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://my.naonsoft.com/ekp/view/login/userLogin');
  await page.click('#userId');
});
