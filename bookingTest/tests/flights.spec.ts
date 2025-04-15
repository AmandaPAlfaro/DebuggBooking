import { test, expect } from '@playwright/test';
const { BookingPage } = require('../pages/bookingPage');

test('Verify that the user can navigate to the Flights tab', async ({ page }) => {
  const bookingPage = new BookingPage(page);

  await bookingPage.navigate();
  await bookingPage.navigatetoFlights();

  await expect(page.locator('//*[@id="main-search-form"]')).toBeVisible();
});