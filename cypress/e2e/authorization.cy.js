import user from "../fixtures/user.json";
import LoginPage from "../support/pages/LoginPage";
import HomePage from "../support/pages/HomePage";
import {fillAuthorizationFields} from "../support/helper";

describe('Authorization positive scenarios', () => {
    it('Authorization', () => {
        cy.visit("/#/login");
        cy.wait(5000);
        LoginPage.dismissWelcomeBanner();
        fillAuthorizationFields(user.email, user.password)
        LoginPage.getLoginBtn().click();
    
        cy.log('Your Basket should display on page');
        HomePage.getBasketBtn().should('be.visible');
      })
})

describe('Authorization negative scenarios', () => {

    it('Authorization with empty email', () => {
        cy.visit('/#/login');
        cy.wait(5000);
        LoginPage.dismissWelcomeBanner();
        fillAuthorizationFields(user.email, user.password);
        LoginPage.getEmailField().clear();
        LoginPage.getRememberMeCheckbox().should('not.be.checked').check({force: true}).should('be.checked');

        cy.log('User is urged to provide Email');
        cy.contains('Please provide an email address.').should('be.visible');
    })

    it('Authorization with empty password', () => {
        cy.visit('/#/login');
        cy.wait(5000);
        LoginPage.dismissWelcomeBanner();
        fillAuthorizationFields(user.email, user.password);
        LoginPage.getPasswordField().clear();
        LoginPage.getRememberMeCheckbox().should('not.be.checked').check({force: true}).should('be.checked');

        cy.log('User is urged to provide Password');
        cy.contains('Please provide a password.').should('be.visible')
    })
})