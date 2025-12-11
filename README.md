# cypress-react-tests

# 📘 **README.md — Cypress Tests Project**

```md
# Cypress Tests

This repository contains automated tests written with **Cypress** for end-to-end (E2E) and component testing of a React application.

## 🚀 Project Overview

The goal of this project is to provide reliable end-to-end UI tests that ensure key user flows work as expected.  
Cypress is used because it offers:
- fast, reliable browser automation
- clear debugging tools
- automatic waiting
- easy test writing with a clean API

## 📂 Project Structure

```

cypress/
e2e/          # End-to-end tests
fixtures/     # Test data
support/      # Reusable commands and test setup
screenshots/  # Taken automatically on test failures (gitignored)
videos/       # Test run videos (gitignored)
cypress.config.js
package.json

````

## 🛠️ Requirements

Before you start, make sure you have installed:
- **Node.js 18+**
- **npm** or **yarn**

Check versions:

```bash
node -v
npm -v
````

## 📦 Installation

Install project dependencies:

```bash
npm install
```

## ▶️ Running Tests

### Open Cypress UI (interactive mode)

```bash
npm run cypress:open
```

### Run all tests in headless mode

```bash
npm run cypress:run
```

### Run a specific test file

```bash
npx cypress run --spec "cypress/e2e/example.cy.js"
```

## 🧪 Writing Tests

All tests are located in:

```
cypress/e2e/
```

Create a new test file:

```js
describe('My test', () => {
  it('should work correctly', () => {
    cy.visit('/');
    cy.contains('Hello').should('be.visible');
  });
});
```

## 📁 Environment Variables

Create `.env` (ignored with `.gitignore`) if needed:

```
CYPRESS_BASE_URL=https://example.com
```

Use in tests:

```js
cy.visit(Cypress.env('BASE_URL'));
```

## 🧹 Git Ignore

The following folders are excluded from Git:

```
node_modules/
cypress/videos/
cypress/screenshots/
.vs/
.env
```

## 📌 Additional Commands

List all available npm scripts:

```bash
npm run
```

---

## 📄 License

This project is intended for learning and internal testing purposes.

```

---
