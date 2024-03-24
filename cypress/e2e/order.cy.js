import user from '../fixtures/user.json'
import LoginPage from '../support/pages/LoginPage'
import HomePage from '../support/pages/HomePage'
import BasketPage from '../support/pages/BasketPage';
import {findProduct} from '../support/helper'
import {fillAuthorizationFields} from "../support/helper";
import {faker} from '@faker-js/faker'

user.country = faker.location.country();
user.name = faker.person.firstName();
user.mobileNumber = faker.string.numeric(8);
user.zipCode = faker.location.zipCode('#####');
user.address = faker.location.streetAddress(false);
user.city = faker.location.city();
user.state = faker.location.state();
user.cardNumber = faker.string.numeric(16);

describe('Order suite', () => {
    it('Order from homepage', () => {
        cy.visit("/#/login");
        cy.wait(5000);
        LoginPage.dismissWelcomeBanner();
        fillAuthorizationFields(user.email, user.password)
        LoginPage.getLoginBtn().click();
        cy.wait(3000);

        findProduct('Apple Pomace');

        HomePage.getBasketBtn().click();
        cy.wait(1000);
        BasketPage.getCheckoutBtn().click();
        cy.wait(1000);
        BasketPage.getAddNewAddressBtn().click();

        BasketPage.getCountryField().type(user.country);
        BasketPage.getNameField().type(user.name);
        BasketPage.getMobileNumberField().type(user.mobileNumber);
        cy.wait(1000);
        BasketPage.getZipCodeField().type(user.zipCode);
        BasketPage.getAddressField().type(user.address);
        BasketPage.getCityField().type(user.city);
        BasketPage.getStateField().type(user.state);

        BasketPage.getSubmitBtn().click();

        BasketPage.getSelectAddressRadioBtn().click({force: true});
        BasketPage.getContinueBtn().click({force: true});

        BasketPage.getDeliverySpeedOne().click();
        BasketPage.getContinueBtn().click();

        BasketPage.getAddCardPanel().click();
        BasketPage.getNameOnCardField().type(user.name, {force: true});
        BasketPage.getCardNumberField().type(user.cardNumber);
        BasketPage.getExpiryMonthField().select(0);
        BasketPage.getExpiryYearField().select(0);
        BasketPage.getCardSubmitBtn().click();

        BasketPage.getCardRadioBtn().click();
        BasketPage.getContinueBtn().click();

        BasketPage.getPlaceOrderBtn().click();

        BasketPage.getConfirmation().should('be.visible').and('contain', 'Thank you for your purchase!')
    })
})