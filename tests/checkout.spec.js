const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('Complete end-to-end purchase flow', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Step 2: Add product
  await productsPage.addProductByName('Sauce Labs Backpack');

  // Step 3: Go to cart
  await productsPage.goToCart();

  // Step 4: Verify cart has item
  const count = await cartPage.getCartItemCount();
  expect(count).toBe(1);

  // Step 5: Proceed to checkout
  await cartPage.proceedToCheckout();

  // Step 6: Fill details
  await checkoutPage.fillCustomerInfo('Adarsh', 'QA', '12345');

  // Step 7: Complete order
  await checkoutPage.completeOrder();

  // Step 8: Verify success
  const message = await checkoutPage.getSuccessMessage();
  expect(message).toContain('Thank you');
});