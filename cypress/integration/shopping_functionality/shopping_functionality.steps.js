import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../support/pages/home_page';

Given('I visit the DemoBlaze website', () => {
  HomePage.visit();
});

When('I select the {string} category', (categoryName) => {
  HomePage.selectCategory(categoryName); // Use Page Object method
});

Then('the category page for {string} is displayed', (categoryName) => {
  cy.get('h1').should('contain', categoryName);
  // Add more specific assertions if needed, e.g., for category description
});
