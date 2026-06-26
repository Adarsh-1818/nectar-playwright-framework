# 🛒 Nectar / SauceDemo E-Commerce Playwright Automation Framework

A robust end-to-end UI test automation framework built using **Playwright (JavaScript)** following the **Page Object Model (POM)** design pattern.  
This project simulates a real-world e-commerce flow inspired by Nectar/Sainsbury’s loyalty and checkout system.

---

## 🚀 Tech Stack

- Playwright Test Runner
- JavaScript (Node.js)
- Page Object Model (POM)
- Dotenv for environment variables
- Git & GitHub for version control

---

## 📌 Project Features

- ✅ Login automation (valid & invalid users)
- ✅ Product search & cart management
- ✅ End-to-end checkout flow
- ✅ Nectar rewards calculation system
- ✅ Loyalty tier classification (Bronze / Silver / Gold)
- ✅ Reusable Page Object Model structure
- ✅ Environment-based test data management
- ✅ Stable assertions with Playwright expect API

---

## 🧪 Test Scenarios Covered

### 🔐 Authentication
- Valid login using standard_user
- Invalid login validation

### 🛍️ E-Commerce Flow
- Add product to cart
- Validate cart items
- Complete checkout process

### 🎁 Nectar Rewards System
- Calculate total purchase amount
- Convert spend into reward points
- Determine loyalty tier:
  - Bronze
  - Silver
  - Gold

---

## 📁 Project Structure
nectar-ecommerce-playwright-framework/
│
├── tests/
├── pages/
├── utils/
├── playwright.config.js
├── .env
└── README.md

---

## ▶️ How to Run the Project

### 1. Install dependencies
```bash
1. npm install
2. Install Playwright browsers
npx playwright install
3. Run all tests
npx playwright test
4. Run UI mode (debugging)
npx playwright test --ui
5. View HTML report
npx playwright show-report


⚙️ Environment Variables

Create a .env file in the root:

USERNAME=standard_user
PASSWORD=secret_sauce


📊 Key Learning Outcomes
Built scalable automation framework using POM
Handled real-world UI synchronization issues
Implemented reusable test utilities
Managed environment-based configuration
Debugged flaky tests using Playwright traces and logs


🧠 Business Simulation
This framework simulates:

Retail checkout flow (Sainsbury’s / Nectar style)
Customer loyalty reward system
E-commerce user journey validation


👨‍💻 Author
Adarsh
QA Automation Engineer (Playwright | JavaScript)

📌 Future Improvements
CI/CD integration with GitHub Actions
API testing layer addition
Parallel execution optimization
Dockerized test environment