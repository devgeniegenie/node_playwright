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

    //?? ?????? ??
    await page.waitForLoadState('networkidle');

    await page.evaluate(() => {
        // ??? ??? ?? ?? ??
        GwMainMenu.fn.showAllMenuBox();
        GwMainMenu.fn.goPage('MNU141533832780342527501','https://my.naonsoft.com/ekp/scr/attend/atnAttendMain','G','L','null','null');
    });

    await page.click('#atnMyTimeCard_attnlvfRegBtn');
    await page.click('#myAttendWrite_btn_attn');
})();