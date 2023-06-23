const playwright = require('playwright');
const {chromium} = require("playwright");
const {gwId, gwPassword} = require('./var');

(async () => {
    const browser = await chromium.launch({
        headless: false,
        fullscreen: true
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://my.naonsoft.com/ekp/view/login/userLogin');
    await page.click('#userId');
    await page.fill('#userId', gwId);
    await page.locator('#login_loginBox div').click();
    await page.fill('#password', gwPassword);
    await page.click('#btnLogin');
    // const parentElement = await page.waitForSelector('#lnb');

    // await childElement.click();
    // await browser.close();
    const timeout = 5000; // ?? ?? (???)

    await page.waitForFunction(() => {
        const element = document.querySelectorAll('a[title="????"]');
        return element !== null
    }, {timeout: timeout});

    await page.click($('a[title="????"]'));

})();