const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { NectarRewardsPage } = require('../pages/NectarRewardsPage');

const { NectarCalculator } = require('../utils/nectarCalculator');

test('Validate Nectar rewards system after purchase', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const nectarPage = new NectarRewardsPage(page);

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Step 2: Add product
  await productsPage.addProductByName('Sauce Labs Backpack');

  // Step 3: Go to cart
  await productsPage.goToCart();
  await cartPage.proceedToCheckout();

  // Step 4: Checkout
  await checkoutPage.fillCustomerInfo('Adarsh', 'QA', '12345');
  

  // Step 5: Get total amount
  const totalAmount = await nectarPage.getTotalAmount();

  await checkoutPage.completeOrder();
  // Step 6: Calculate Nectar points
  const points = NectarCalculator.calculatePoints(totalAmount);

  // Step 7: Get loyalty tier
  const tier = NectarCalculator.getLoyaltyTier(points);

  // Step 8: Assertions
  expect(points).toBeGreaterThan(0);
  expect(['BRONZE', 'SILVER', 'GOLD']).toContain(tier);

  console.log(`Total: £${totalAmount}`);
  console.log(`Points Earned: ${points}`);
  console.log(`Loyalty Tier: ${tier}`);
});