import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BasePage from '../../support/pages/base_page';
import HomePage from '../../support/pages/home_page';

const productName = 'Sony vaio i5';

Given('I visit the DemoBlaze website', () => {
    BasePage.visit();
});

When('I select the {string} category', (categoryName) => {
    HomePage.selectCategory(categoryName);
});

Then('the product {string} is displayed', (productName) => {
    cy.get('h4').should('contain', productName);
});

When('I select a product', () => {
    // Use Page Object method with specific selector for chosen product
    HomePage.selectProduct(productName);
});

Then('the product details page is displayed', () => {
    cy.get('h2').should('contain', productName);
    cy.get('.price-container').should('be.visible');
    cy.get('.description').should('be.visible');
});

And('I can add the product to the cart', () => {
    ProductPage.addToCart(); // Use Page Object method
    cy.get('.cart-count').should('contain', 1); // Verify cart item count
});

