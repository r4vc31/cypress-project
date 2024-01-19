class BasePage {

    visit() {
        cy.visit('/');
    }

    get homeLink() {
        return cy.contains('a', 'Home');
    }

    get aboutUsLink() {
        return cy.contains('a', 'About us');
    }

    get contactUsLink() {
        return cy.contains('a', 'Contact');
    }

    clickHomeLink() {
        this.homeLink.click();
    }

    clickAboutUsLink() {
        this.aboutUsLink.click();
    }

    clickContactUsLink() {
        this.contactUsLink.click();
    }

}

export default new BasePage();
