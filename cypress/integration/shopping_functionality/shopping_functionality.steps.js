import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BasePage from '../../support/pages/base_page';
import HomePage from '../../support/pages/home_page';

Given('I visit the DemoBlaze website', () => {
    BasePage.visit();
});

When('I select the {string} category', (categoryName) => {
  HomePage.selectCategory(categoryName); // Use Page Object method
});

Then('the product {string} is displayed', (productName) => {
  cy.get('h4').should('contain', productName);
  // Add more specific assertions if needed, e.g., for category description
});

