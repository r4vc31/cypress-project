import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BasePage from '../../support/pages/base_page';
import HomePage from '../../support/pages/home_page';
import ProductPage from '../../support/pages/product_page';
import CartPage from '../../support/pages/cart_page';
import CheckoutPage from '../../support/pages/checkout_page';
import home_page from '../../support/pages/home_page';
import { } from '../header_navigation/header_navigation.steps';

const productName = 'Sony vaio i5';

Given('I visit the DemoBlaze website', () => {
    BasePage.visit();
});

When('I select the {string} category', (categoryName) => {

    HomePage.selectCategory(categoryName);
    cy.wait(2500);

});

When('I select a random category', () => {
    HomePage.selectRandomCategory();
    cy.wait(2500);
});

Then('the product list is displayed', () => {
    const product_list = HomePage.product_list;
    product_list.should("be.visible");
    product_list.its('length').should('be.gt', 0);
});

And('the product {string} is present', (productName) => {
    home_page.getProductTitle(productName).should("be.visible");
});

And('I select the {string} product', (productName) => {
    HomePage.selectProduct(productName);
});

And('I select a random product', () => {
    HomePage.selectRandomProduct();
});

Then('the product page is displayed', () => {
    ProductPage.productTitle.should("be.visible");
    ProductPage.productPrice.should('be.visible');
    ProductPage.productDescription.should('be.visible');
});


And('I add the product to the cart', () => {
    ProductPage.addToCart();
});


Then('the cart contains a product', () => {
    CartPage.cartProducts.should('be.visible').its('length').should('be.gt', 0);
});


And('I remove the added product', () => {
    CartPage.removeFirstProduct();
});

Then('the cart is empty', () => {
    CartPage.cartProducts.should('not.exist'); // Check for absence of cart items
});


When('I proceed to checkout', () => {
    CartPage.proceedToCheckout();
});

And('I enter the order info', () => {
    cy.fixture("client_info").then((client) => {
        CheckoutPage.fillOrderInfo(client.name, client.country, client.city, client.creditCart, client.month, client.year);
    })
});

And('I confirm the order', () => {
    CheckoutPage.confirmOrder();
});

Then('the order is successfully placed', () => {
    cy.contains("h2", "Thank you for your purchase!").should("be.visible");
});