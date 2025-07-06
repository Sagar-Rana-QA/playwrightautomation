const {test,expect} = require('@playwright/test');



test('first test with radio', async({page})=>{


await page.goto('https://testautomationpractice.blogspot.com/');

const radioButtons =  page.locator("(//div[@class='form-group'])[3]//input");

await radioButtons.nth(1).click();


const checkBox= page.locator("label.form-check-label");
await checkBox.nth(0).isVisible();
const count = await checkBox.count();
console.log(count);

for(let i =0; i<count;i++ ){

const text = await checkBox.nth(i).textContent();

if(text === 'Thursday' || text ==='Sunday'){
  
    await checkBox.nth(i).check();
     

}


}
const thurs = await page.getByText('Thursday');


await expect(thurs.isChecked()).toBeTruthy();

await page.waitForTimeout(5000);

const drpDown=  page.locator('select#country');
await drpDown.selectOption('France');
await expect(drpDown).toHaveValue('france');

const multiselect = page.locator('#colors');

await page.selectOption('#colors',['Blue','Yellow']);

await page.locator('button#alertBtn').click();

await page.on('dialog', dialog => dialog.accept);


await page.waitForTimeout(10000);



await page.close();





})