module.exports = {
    default: {
      requireModule: [
        "ts-node/register",
        "tsconfig-paths/register"
      ],
      require: [
        "src/test/steps/**/*.ts",
        "src/main/hooks.ts"
      ],
      format: [
        'progress',
        'html:results/playwright-report/cucumber-html-report.html',
        'json:results/playwright-report/cucumber-report.json'
      ],
      formatOptions: {
        snippetInterface: 'async-await'
      },
      publishQuiet: true,
      // Global timeout settings
      timeout: 60000 // 60 seconds for each step
    }
  };