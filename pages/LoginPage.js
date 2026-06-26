class LoginPage {
    constructor(page) {
      this.page = page;
  
      // Locators
      this.usernameInput = page.locator('#user-name');
      this.passwordInput = page.locator('#password');
      this.loginButton = page.locator('#login-button');
      this.errorMessage = page.locator('[data-test="error"]');
    }
  
    // Navigate to login page
    async goto() {
      await this.page.goto('/');
    }
  
    // Perform login action
    async login(username, password) {
        await this.page.goto('/');
      
        await this.usernameInput.waitFor();
        await this.usernameInput.fill(username);
      
        await this.passwordInput.fill(password);
      
        await this.loginButton.click();
    
        await this.page.waitForTimeout(2000);
      }
  
    // Get error message text
        async getErrorMessage() {
            if (await this.errorMessage.isVisible()) {
              return await this.errorMessage.textContent();
            }
            return '';
    }
  }
  
  module.exports = { LoginPage };