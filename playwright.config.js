require('dotenv').config({ override: true });

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  timeout: 30000,

  expect: {
    timeout: 5000,
  },

  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  use: {
    browserName: 'chromium',
    headless: true,
  
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  
    baseURL: 'https://www.saucedemo.com',
  
    // 🔥 IMPORTANT FIX
    contextOptions: {
      viewport: { width: 1280, height: 720 }
    }
  },

  retries: 1,
  workers: 2,
});
