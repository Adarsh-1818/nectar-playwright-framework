const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');

test('Add product to cart successfully', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Step 2: Verify user is on products page
  await expect(page).toHaveURL(/inventory.html/);

  // Step 3: Add product to cart
  await productsPage.addProductByName('Sauce Labs Backpack');

  // Step 4: Verify cart count
  const count = await productsPage.getCartCount();
  expect(count).toBe('1');
});