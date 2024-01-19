import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BasePage from '../../support/pages/base_page';
import HomePage from '../../support/pages/home_page';
import ProductPage from '../../support/pages/product_page';
import CartPage from '../../support/pages/cart_page';
import CheckoutPage from '../../support/pages/checkout_page';

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

When('I select a random product', () => {
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

And('I move to the product page', () => {
    BasePage.getHeaderLinkOption("Cart").click();
});

Then('the cart page is displayed', () => {
    cy.location('pathname').should('eq', '/cart.html'); // Validate URL for Cart
});

Then('the cart contains a product', () => {
    const cartProducts = CartPage.cartProducts.should('be.visible');
    cartProducts.its('length').should('be.gt', 0);
});


And('I remove the added product', () => {
    CartPage.removeFirstProduct(); // Use Page Object method
});

Then('the cart is empty', () => {
    CartPage.cartProducts.should('not.exist'); // Check for absence of cart items
});


When('I proceed to checkout', () => {
    CartPage.proceedToCheckout(); // Use Page Object method
});

And('I enter the order info', () => {
    CheckoutPage.fillOrderInfo("Ronad", "Ecuador", "Gye", "012456789", "January", "2024");
});

And('I confirm the order', () => {
    CheckoutPage.confirmOrder();
});

Then('the order is successfully placed', () => {
    cy.contains("h2", "Thank you for your purchase!").should("be.visible");
});