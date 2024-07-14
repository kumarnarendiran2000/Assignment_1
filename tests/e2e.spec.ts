// tests/e2e.spec.ts
import { test, expect } from '@playwright/test';

test.describe('E2E Testing for My Application', () => {

  test('User can log in and navigate through the application', async ({ page }) => {
    // Navigate to the login page
    await page.goto('http://localhost:5173/login');

    // Fill in the login form and submit it
    await page.fill('input[type="text"]', 'admin');
    await page.fill('input[type="password"]', 'password');
    await page.click('button[type="submit"]');

    // Verify that the user is redirected to the home page
    await expect(page).toHaveURL('http://localhost:5173/');
    await expect(page.locator('h2')).toHaveText('Welcome to my website');
    await expect(page.locator('p')).toHaveText('This is the home page content');
    

    // Navigate to the About page
    await page.click('text=About');
    await expect(page).toHaveURL('http://localhost:5173/about');
    await expect(page.locator('h2')).toHaveText('Welcome to my website');
    await expect(page.locator('p')).toHaveText('This is the About page content');
    

    // Navigate to the Services page
    await page.click('text=Services');
    await expect(page).toHaveURL('http://localhost:5173/services');
    await expect(page.locator('h2')).toHaveText('Welcome to my website');
    await expect(page.locator('p')).toHaveText('This is the Services page content');

    // Navigate to the Contact page
    await page.click('text=Contact');
    await expect(page).toHaveURL('http://localhost:5173/contact');
    await expect(page.locator('h2')).toHaveText('Contact Us');
    await expect(page.locator('p')).toHaveText('Feel free to reach out to us!');

    // Navigate to the Contact Form page
    await page.click('text=Fill out the contact form');
    await expect(page).toHaveURL('http://localhost:5173/contact/form');
    await expect(page.locator('h2')).toHaveText('Contact Form');

    // Fill out and submit the contact form
    await page.fill('input[type="text"]', 'John Doe');
    await page.fill('input[type="email"]', 'john.doe@example.com');
    await page.fill('textarea', 'This is a test message');
    await page.click('button[type="submit"]');

    // Verify form submission success (this assumes an alert is shown upon success)
    // Playwright's page.on('dialog') can be used to handle alerts
    page.on('dialog', async dialog => {
      expect(dialog.message()).toBe('Data submitted successfully');
      await dialog.accept();
    });

    // Logout
    await page.click('button:has-text("Logout")');
    await expect(page).toHaveURL('http://localhost:5173/login');
  });

});
