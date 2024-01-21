class BasePage {

    visit() {
        cy.request('GET', 'https://demoblaze.com')
            .then((response) => {
                expect(response.status).to.eq(200);
            });
        cy.visit('/');
    }

    getHeaderLink(optionName) {
        return cy.contains('a.nav-link', optionName);
    }

}

export default new BasePage();
