const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { validUser } = require('../utils/testData');

test.describe('Login Tests', () => {

    test('@smoke Valid login should succeed', async ({ page }) => {

        const loginPage = new LoginPage(page);
      
        await loginPage.goto();
      
        await loginPage.login(validUser.username, validUser.password);
      
        await expect(page.locator('.inventory_list')).toBeVisible();
      });

  test('@regression Invalid login should show error', async ({ page }) => {

    const loginPage = new LoginPage(page);
  
    await loginPage.goto();
    await loginPage.login('wrong_user', 'wrong_pass');
  
    const error = await loginPage.getErrorMessage();
  
    expect(error).toContain('Epic sadface');
  });

});