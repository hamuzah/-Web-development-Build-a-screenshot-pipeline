const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000'); // URL of the app
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    await browser.close();
})();
