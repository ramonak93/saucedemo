# SauceDemo WebdriverIO E2E Tests

This repository contains WebdriverIO tests for `https://www.saucedemo.com` in the EPAM fundamentals course.

## Author

Siarhei Ramanishkin `https://github.com/ramonak93`

## Prerequisites

- Node.js 18+ (or LTS)
- npm

## Run tests

Run the test specs (controls are in `wdio.conf.js`):

```bash
npx wdio wdio.conf.js
```

Run individual suites:

```bash
npx wdio wdio.conf.js --spec test/specs/uc1.test.js
npx wdio wdio.conf.js --spec test/specs/uc2.test.js
```

## Generate Allure report

After tests complete, generate the report from `allure-results`:

```bash
npx allure generate --clean
npx allure open
```

Or:

```bash
npx allure serve
```

## Possible Improvements:

1. Move all static data to separate files
2. Create page factory
3. Folder structure improvements in case the project grows bigger (e.g. config folder, etc.)
