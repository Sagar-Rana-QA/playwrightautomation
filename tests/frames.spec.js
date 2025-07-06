const {test,expect} = require('@playwright/test');

test('frames', async({page}) => {

await page.goto('https://ui.vision/demo/webtest/frames/');
const frame = page.frameLocator("//frame[@src='frame_1.html']");
await frame.locator("//input[@name='mytext1']").fill('sagar');
await page.waitForTimeout(2000);




})