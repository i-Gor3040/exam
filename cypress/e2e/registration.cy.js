import user from '../fixtures/user.json'
import {faker} from '@faker-js/faker'
import LoginPage from "../support/pages/LoginPage";
import RegistrationPage from "../support/pages/RegistrationPage";
import HomePage from '../support/pages/HomePage';

user.email = faker.internet.email();
user.password = faker.internet.password({length:15, prefix: 'QALight2024'});
user.answer = faker.person.middleName();

describe('register with valid data', () => {

  it('Registration', () => {
    cy.visit("/");
    cy.wait(5000);
    RegistrationPage.dismissWelcomeBanner();
    RegistrationPage.getAccount().click();
    RegistrationPage.getLoginBtn().click();

    LoginPage.getRegisterLink().click();

    cy.log("Fill out the User Registration field");
    RegistrationPage.getEmailField().type(user.email);
    RegistrationPage.getPasswordField().type(user.password);
    RegistrationPage.getRepeatPasswordField().type(user.password);
    RegistrationPage.getSecurityQuestion().click();
    RegistrationPage.getFirstQuestion().click();
    RegistrationPage.getAnswerField().type(user.answer);
    RegistrationPage.getRegisterBtn().click();
  })

  it('Authorization', () => {
    cy.visit("/#/login");
    cy.wait(5000);
    LoginPage.dismissWelcomeBanner();
    LoginPage.getEmailField().type(user.email);
    LoginPage.getPasswordField().type(user.password);
    LoginPage.getLoginBtn().click();

    cy.log('Your Basket should display on page');
    HomePage.getBasketBtn().should('be.visible');

  })

})