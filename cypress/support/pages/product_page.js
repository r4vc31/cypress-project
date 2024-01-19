class ProductPage {

    addToCart() {
        cy.contains("a", "Add to cart").click(); // Adjust selector for add-to-cart button
    }

    verifyProductDetails(productName, price, description) {
        cy.get('h1').should('contain', productName);
        cy.get('.product-price').should('contain', price);
        cy.get('.product-description').should('contain', description);
    }
}

export default new ProductPage();
