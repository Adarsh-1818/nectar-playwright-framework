const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Login Tests', () => {

    test('@smoke Valid login should succeed', async ({ page }) => {

        const loginPage = new LoginPage(page);
      
        await loginPage.goto();
      
        await loginPage.login(
            process.env.USERNAME,
            process.env.PASSWORD

        );   
        
  await expect(page).toHaveURL(/inventory.html/);
      });

  test('@regression Invalid login should show error', async ({ page }) => {

    const loginPage = new LoginPage(page);
  
    await loginPage.goto();
    await loginPage.login('wrong_user', 'wrong_pass');
  
    const error = await loginPage.getErrorMessage();
  
    expect(error).toContain('Epic sadface');
  });

});
