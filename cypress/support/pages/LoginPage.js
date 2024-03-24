import BasePage from "./BasePage";

class LoginPage extends BasePage {

    getRegisterLink() {
        return cy.get('[href="#/register"]');
    }

    getEmailField() {
        return cy.get('#email');
    }

    getPasswordField() {
        return cy.get('#password');
    }

    getLoginBtn() {
        return cy.get('#loginButton');
    }

    getRememberMeCheckbox() {
        return cy.get('#rememberMe-input')
    }

}

export default new LoginPage();