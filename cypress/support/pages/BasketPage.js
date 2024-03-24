import BasePage from "./BasePage";

class BasketPage extends BasePage {

    getCheckoutBtn() {
        return cy.get('button').contains(' Checkout ');
    }

    getAddNewAddressBtn() {
        return cy.get('button').contains('Add New Address');
    }

    getCountryField() {
        return cy.get('[data-placeholder="Please provide a country."]');
    }

    getNameField() {
        return cy.get('[data-placeholder="Please provide a name."]');
    }

    getMobileNumberField() {
        return cy.get('[data-placeholder="Please provide a mobile number."]');
    }

    getZipCodeField() {
        return cy.get('[data-placeholder="Please provide a ZIP code."]');
    }

    getAddressField() {
        return cy.get('[data-placeholder="Please provide an address."]');
    }

    getCityField() {
        return cy.get('[data-placeholder="Please provide a city."]');
    }

    getStateField() {
        return cy.get('[data-placeholder="Please provide a state."]');
    }

    getSubmitBtn() {
        return cy.get('#submitButton');
    }

    getSelectAddressRadioBtn() {
       return cy.get('.mat-radio-input');
    }

    getContinueBtn() {
        return cy.get('button').contains('Continue');
    }

    getDeliverySpeedOne() {
        return cy.get('.mat-radio-button').eq(0);
    }

    getAddCardPanel() {
        return cy.contains('Add a credit or debit card');
    }

    getNameOnCardField() {
        return cy.get('input[required]').eq(0);
    }

    getCardNumberField() {
        return cy.get('input[required]').eq(1);
    }

    getExpiryMonthField() {
        return cy.get('select').eq(0);        
    }

    getExpiryYearField() {
        return cy.get('select').eq(1);        
    }

    getCardSubmitBtn() {
        return cy.get('#submitButton');
    }

    getCardRadioBtn() {
        return cy.get('.mat-radio-container');
    }

    getPlaceOrderBtn() {
        return cy.contains('Place your order and pay');
    }

    getConfirmation() {
        return cy.get('h1.confirmation');
    }


}

export default new BasketPage()