class CartPage {

    get cartProducts() {
        return cy.get('#tbodyid tr');
    }

}

export default new CartPage();
