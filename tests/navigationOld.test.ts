// tests/app.test.ts
import { test, expect } from '@playwright/test';

test.describe('Multi-page Application', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
  });

  test('should navigate to Home page and display correct content', async ({ page }) => {
    await page.click('text=Home');
    await expect(page.locator('h2')).toHaveText('Welcome to my website');
    await expect(page.locator('p')).toHaveText('This is the home page content');
  });

  test('should navigate to About page and display correct content', async ({ page }) => {
    await page.click('text=About');
    await expect(page.locator('h2')).toHaveText('Welcome to my website');
    await expect(page.locator('p')).toHaveText('This is the About page content');
  });

  test('should navigate to Services page and display correct content', async ({ page }) => {
    await page.click('text=Services');
    await expect(page.locator('h2')).toHaveText('Welcome to my website');
    await expect(page.locator('p')).toHaveText('This is the Services page content');
  });

  test('should navigate to Contact page and display correct content', async ({ page }) => {
    await page.click('text=Contact');
    await expect(page.locator('h2')).toHaveText('Welcome to my website');
    await expect(page.locator('p')).toHaveText('This is the Contact page content');
  });
});
