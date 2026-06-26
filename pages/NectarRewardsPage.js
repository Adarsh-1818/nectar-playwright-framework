const { expect } = require('@playwright/test');

class NectarRewardsPage {
    constructor(page) {
      this.page = page;
    }
  
    async getTotalAmount() {

        const locator = this.page.locator('.summary_total_label');
      
        await expect(locator).toBeVisible({ timeout: 10000 });
      
        const text = await locator.textContent();
      
        const amount = text.match(/[\d.]+/)[0];
      
        return parseFloat(amount);
      }
  }
  
  module.exports = { NectarRewardsPage };