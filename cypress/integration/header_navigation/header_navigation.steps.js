import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BasePage from '../../support/pages/base_page';

Given('I visit the DemoBlaze website', () => {
    BasePage.visit();
});

When('I click the {string} link in the header', (linkName) => {
    BasePage.getHeaderLink(linkName).click();
});

Then('the {string} page should be displayed', (content) => {
    switch (content) {
        case "Home":
            cy.location('pathname').should('eq', '/index.html');
            break;
        case "Contact":
            cy.get("form").should('be.visible');
            cy.contains("label", "Contact Email:").should('be.visible');
                break;
        case "About us":
            cy.contains('h5', "About us").should('be.visible');
            cy.get(".video-js").should('be.visible');
            break;
        case "Cart":
            cy.location('pathname').should('eq', '/cart.html');
            cy.contains("button", "Place Order").should('be.visible');
            break
        case "Log in":
            cy.contains("#logInModalLabel", "Log in").should('be.visible');
            cy.contains("button", "Log in").should('be.visible');
            break
        case "Sign up":
            cy.contains("#signInModalLabel", "Sign up").should('be.visible');
            cy.contains("button", "Sign up").should('be.visible');
            break
    }
});



