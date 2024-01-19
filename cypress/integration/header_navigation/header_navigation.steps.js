import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BasePage from '../../support/pages/base_page';

Given('I am on any page', () => {
    BasePage.visit();
});

When('I click the Home link in the header', () => {
    BasePage.clickHomeLink();
});

When('I click the About Us link in the header', () => {
    BasePage.clickAboutUsLink();
});

When('I click the Contact Us link in the header', () => {
    BasePage.clickContactUsLink();
});

When('the Home page is displayed', () => {
    cy.location('pathname').should('eq', '/index.html'); // Validate URL for Home
});
When('the About Us page is displayed', () => {
    cy.contains('h5', "About us").should('be.visible');
});
When('the Contact Us page is displayed', () => {
    cy.get("form").should('be.visible');
});


