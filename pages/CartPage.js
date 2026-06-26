class CartPage {
    constructor(page) {
      this.page = page;
  
      // Locators
      this.cartItems = page.locator('.cart_item');
      this.cartItemNames = page.locator('.inventory_item_name');
      this.removeButtons = page.locator('button.cart_button');
      this.checkoutButton = page.locator('#checkout');
    }
  
    // Get number of items in cart
    async getCartItemCount() {
      return await this.cartItems.count();
    }
  
    // Get all item names in cart
    async getCartItemNames() {
      return await this.cartItemNames.allTextContents();
    }
  
    // Remove item by index
    async removeItem(index) {
      await this.removeButtons.nth(index).click();
    }
  
    // Click checkout
    async proceedToCheckout() {
      await this.checkoutButton.click();
    }
  }
  
  module.exports = { CartPage };