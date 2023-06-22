const playwright = require('playwright');
const {chromium} = require("playwright");

(async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://my.naonsoft.com/ekp/view/login/userLogin');
    await page.click('#userId');
    await page.fill('#userId', 'myId');
    await page.locator('#login_loginBox div').click();
    await page.fill('#password', 'myPassword');
    await page.click('#btnLogin');
    const parentElement = await page.waitForSelector('#lnb');
    const childElement = await parentElement.waitForSelector('a[title="????"]');

    await childElement.click();
    await browser.close();
})();