import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/e2e.spec.ts"],
  use: {
    headless: false,
    launchOptions: {
      slowMo: 1000, // Add a delay (in milliseconds) between actions to slow down the test execution
    },
  },
  reporter: [
    ['list'],
    ['html', { open: 'never' }] // Generate an HTML report
  ],
};

export default config;