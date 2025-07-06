const {test,expect} = require('@playwright/test');



test('first test with xpath', async({page})=>{

const username= page.locator("//input[@name='username']");
const password = page.locator("//input[@name='password']");
const loginButton = page.locator("button:has-text(' Login ')");



await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await username.fill('Admin');
await password.fill('admin123');
await loginButton.click();
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
const menuItem =page.locator("//a[@class='oxd-main-menu-item']//span").nth(0);

await expect(menuItem).toBeVisible();

const links = page.locator("//a[@class='oxd-main-menu-item']//span");
const count = await links.count();
 expect(count).toBe(11);



}

}

await page.getByPlaceholder('Type for hints...').fill('manda akhil user');
await page.getByRole('button',{type:'submit'} ).nth(3).click();

await page.close(); 








})
