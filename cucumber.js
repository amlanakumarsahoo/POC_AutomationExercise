const commonConfig = {
  requireModule: ['ts-node/register', 'tsconfig-paths/register'],
  require: ['src/test/steps/**/*.ts', 'src/main/hooks.ts'],
  format: [
    'progress',
    'html:results/playwright-report/cucumber-html-report.html',
    'json:results/playwright-report/cucumber-report.json'
  ],
  formatOptions: {
    snippetInterface: 'async-await'
  },
  publishQuiet: true,
  timeout: 60000 // 60 seconds per step
};

module.exports = {
  default: {
    ...commonConfig,
    worldParameters: {
      baseUrl: 'https://automationexercise.com/',
      environment: 'default'
    }
  },

  test: {
    ...commonConfig,
    worldParameters: {
      baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
      environment: 'test'
    }
  },

  stage: {
    ...commonConfig,
    worldParameters: {
      baseUrl: 'https://stage.orangehrmlive.com',
      environment: 'stage'
    }
  },

  prod: {
    ...commonConfig,
    worldParameters: {
      baseUrl: 'https://orangehrmlive.com',
      environment: 'prod'
    }
  }
};
