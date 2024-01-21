class ProductPage {

    get productTitle(){
        return cy.get('h2.name');
    }

    get productPrice(){
        return cy.get('h3.price-container');
    }

    get productDescription(){
        return cy.get('div.description');
    }

    addToCart() {
        cy.contains("a", "Add to cart").click();
    }

    verifyProductDetails(productName, price, description) {
        cy.get('h1').should('contain', productName);
        cy.get('.product-price').should('contain', price);
        cy.get('.product-description').should('contain', description);
    }
}

export default new ProductPage();
