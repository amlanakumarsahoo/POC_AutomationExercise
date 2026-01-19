import { defineConfig, devices } from '@playwright/test';
import path from 'path';
import fs from 'fs';

// Create custom directories for videos and screenshots
const videosDir = path.join('results', 'videos');
const screenshotsDir = path.join('results', 'screenshots');

// Ensure directories exist
if (!fs.existsSync(videosDir)) {
  fs.mkdirSync(videosDir, { recursive: true });
}
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

export default defineConfig({
  testDir: './PlaywrightPractice',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,
  reporter: 'html',
  outputDir: 'results/playwright-report',
  
  // Configure test directory for videos
  testMatch: '**/*.spec.ts',
  
  use: {
    baseURL: 'https://www.google.com',
    trace: 'on-first-retry',
    screenshot: {
      mode: 'only-on-failure',
      fullPage: true
    },
    video: {
      mode: 'on',
      size: { width: 1280, height: 720 }
    },
    viewport: { width: 1920, height: 1080 },
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
      },
    },
  ],

  // Configure web server if needed
  webServer: undefined,
});
