import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/e2e.spec.ts"],
  use: {
    headless: false
  }
};

export default config;