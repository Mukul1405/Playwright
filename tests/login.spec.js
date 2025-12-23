import {test, expect} from '@playwright/test'
import LoginPage from '../pages/LoginPage'

test('Login with Valid Creds', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/");

    const email = "anshika@gmail.com";
    const password = "Iamking@000";
    const lp = new LoginPage(page);
    await lp.login(email,password);

    

})