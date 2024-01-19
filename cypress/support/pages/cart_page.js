class CartPage {

    get cartProducts() {
        return cy.get('#tbodyid tr');
    }

    removeFirstProduct() {
        this.cartProducts.eq(0).contains("a", "Delete").click();
    }

}

export default new CartPage();
