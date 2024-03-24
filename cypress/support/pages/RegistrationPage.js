import BasePage from "./BasePage";

class RegistrationPage extends BasePage {

    getEmailField() {
        return cy.get('#emailControl');
    }

    getPasswordField() {
        return cy.get('#passwordControl');
    }

    getRepeatPasswordField() {
        return cy.get('#repeatPasswordControl');
    }

    getSecurityQuestion() {
       return cy.get('mat-select[id^=mat-select-]');
    }

    getFirstQuestion() {
        return cy.get('[id^="mat-option"]').eq(0);
    }

    getAnswerField() {
        return cy.get('#securityAnswerControl');
    }

    getRegisterBtn() {
        return cy.get('#registerButton');
    }

}

export default new RegistrationPage();