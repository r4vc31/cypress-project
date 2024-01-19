import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BasePage from '../../support/pages/base_page';
import HomePage from '../../support/pages/home_page';
import ProductPage from '../../support/pages/product_page';
import CartPage from '../../support/pages/cart_page';

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


When('I add the product to the cart', () => {
    ProductPage.addToCart(); // Use Page Object method
});

And('I move to the product page', ()=>{
    BasePage.getHeaderLinkOption("Cart").click();
});

Then('the cart page is displayed', () => {
    cy.location('pathname').should('eq', '/cart.html'); // Validate URL for Cart
});

And('the cart contains a product', () => {
    const cartProducts = CartPage.cartProducts.should('be.visible');
    cartProducts.its('length').should('be.gt', 0);
});
