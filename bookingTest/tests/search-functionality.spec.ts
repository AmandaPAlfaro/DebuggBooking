const { test, expect } = require('@playwright/test');
const { BookingPage } = require('../pages/bookingPage');

test('User can search for destination cities', async ({ page }) => {
  const bookingPage = new BookingPage(page);

  await bookingPage.navigate();
  await bookingPage.searchDestination("Oshawa");

  const resultText = await bookingPage.getSearchResultsText();
  expect(resultText).toContain('Oshawa: 24 properties found');
});