class CheckoutPage {
    constructor(page) {
      this.page = page;
  
      // Locators
      this.firstName = page.locator('#first-name');
      this.lastName = page.locator('#last-name');
      this.postalCode = page.locator('#postal-code');
      this.continueButton = page.locator('#continue');
      this.finishButton = page.locator('#finish');
      this.successMessage = page.locator('.complete-header');
    }
  
    // Fill checkout details
    async fillCustomerInfo(first, last, zip) {
      await this.firstName.fill(first);
      await this.lastName.fill(last);
      await this.postalCode.fill(zip);
      await this.continueButton.click();
    }
  
    // Finish order
    async completeOrder() {
      await this.finishButton.click();
    }
  
    // Get success message
    async getSuccessMessage() {
      return await this.successMessage.textContent();
    }
  }
  
  module.exports = { CheckoutPage };