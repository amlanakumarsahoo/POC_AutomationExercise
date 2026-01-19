# Playwright BDD Automation Framework

## Table of Contents
- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Project Structure](#project-structure)
- [Framework Architecture](#framework-architecture)
  - [Page Object Model (POM)](#page-object-model-pom)
  - [BDD with Cucumber](#bdd-with-cucumber)
  - [Test Data Management](#test-data-management)
  - [Configuration Management](#configuration-management)
  - [Reporting](#reporting)
- [Development Workflow](#development-workflow)
  - [Writing Tests](#writing-tests)
  - [Running Tests](#running-tests)
  - [Debugging](#debugging)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Overview
This document provides comprehensive guidelines for the Playwright BDD Automation Framework, built with TypeScript, Cucumber, and the Page Object Model (POM) pattern. The framework is designed for end-to-end testing of web applications with a focus on maintainability, reusability, and scalability.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher) or yarn
- Git
- Visual Studio Code (recommended)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

### Project Structure
```
src/
├── features/           # Feature files (.feature)
├── step-definitions/   # Step definitions (.steps.ts)
├── pages/             # Page Object classes
│   ├── base/          # Base page and components
│   └── [feature]/     # Feature-specific pages
├── support/           # Support files
│   ├── config/        # Configuration files
│   ├── helpers/       # Helper functions
│   └── types/         # TypeScript type definitions
tests/
├── data/             # Test data files
├── reports/          # Test execution reports
└── screenshots/      # Screenshots on test failure
```

## Framework Architecture

### Page Object Model (POM)
The framework follows the Page Object Model pattern to enhance test maintenance and reduce code duplication.

#### Base Page
```typescript
// pages/base/page.ts
export abstract class Page {
  constructor(protected page: Page) {}
  
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
    await this.waitForPageLoad();
  }
  
  abstract waitForPageLoad(): Promise<void>;
  
  // Common methods...
}
```

### BDD with Cucumber
Feature files use Gherkin syntax to describe test scenarios in a business-readable format.

#### Example Feature File
```gherkin
# features/search.feature
Feature: Search Functionality
  As a user
  I want to search for products
  So that I can find what I'm looking for

  @smoke
  Scenario: Search for a product
    Given I am on the homepage
    When I search for "playwright"
    Then I should see search results containing "playwright"
```

### Test Data Management
Test data is managed using JSON files or factory functions for better maintainability.

### Configuration Management
Environment-specific configurations are managed using `.env` files.

### Reporting
- HTML reports with screenshots on failure
- JSON reports for CI/CD integration
- Custom reporting options

## Development Workflow

### Writing Tests
1. Create a new feature file in `features/`
2. Define scenarios using Gherkin syntax
3. Implement step definitions
4. Create/update page objects as needed

### Running Tests
Run all tests:
```bash
npm test
```

Run specific tag:
```bash
npm test -- --tags @smoke
```

Run in headed mode:
```bash
npm run test:headed
```

### Debugging
- Use `--debug` flag for Playwright debug mode
- Screenshots on test failure
- Playwright Inspector for step-by-step debugging

## Best Practices
1. **Page Objects**
   - Keep selectors private
   - Return new page objects for navigation
   - Use getters for elements

2. **Step Definitions**
   - Keep steps atomic
   - Reuse steps when possible
   - Use data tables for multiple test cases

3. **Test Data**
   - Externalize test data
   - Use factories for complex data
   - Keep test data independent

## Troubleshooting
Common issues and solutions:

1. **Element not found**
   - Verify the selector
   - Add explicit waits
   - Check if in iframe

2. **Test flakiness**
   - Add proper waits
   - Use stable selectors
   - Retry mechanisms

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
