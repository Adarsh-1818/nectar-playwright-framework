class ProductsPage {
    constructor(page) {
      this.page = page;
  
      // Product locators
      this.productTitles = page.locator('.inventory_item_name');
      this.productPrices = page.locator('.inventory_item_price');
      this.addToCartButtons = page.locator('button.btn_inventory');
  
      // Cart
      this.cartBadge = page.locator('.shopping_cart_badge');
      this.cartIcon = page.locator('.shopping_cart_link');
    }
  
    // Get all products count
    async getProductCount() {
      return await this.productTitles.count();
    }
  
    // Add product by index
    async addProductToCart(index) {
      await this.addToCartButtons.nth(index).click();
    }
  
    // Add product by name
    async addProductByName(productName) {
      const products = await this.productTitles.allTextContents();
  
      const index = products.findIndex(name =>
        name.trim() === productName
      );
  
      if (index === -1) {
        throw new Error(`Product not found: ${productName}`);
      }
  
      await this.addToCartButtons.nth(index).click();
    }
  
    // Get cart count
    async getCartCount() {
      if (await this.cartBadge.isVisible()) {
        return await this.cartBadge.textContent();
      }
      return '0';
    }
  
    // Go to cart
    async goToCart() {
      await this.cartIcon.click();
    }
  }
  
  module.exports = { ProductsPage };