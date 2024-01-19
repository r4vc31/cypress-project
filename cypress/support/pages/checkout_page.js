class CheckoutPage {

    fillOrderInfo(name, country, city,  creditCart, month, year) {
        cy.get('input#name').type(name);
        cy.get('input#country').type(country);
        cy.get('input#city').type(city);
        cy.get('input#card').type(creditCart);
        cy.get('input#month').type(month);
        cy.get('input#year').type(year);
    }

    confirmOrder() {
        cy.contains("button", "Purchase").click();
    }
}

export default new CheckoutPage();
