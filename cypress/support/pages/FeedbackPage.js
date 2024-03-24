import BasePage from "./BasePage";

class FeedbackPage extends BasePage {

    getCommentField() {
        return cy.get('#comment');
    }

    getRatingSlider() {
        return cy.get('.mat-slider-thumb');
    }

    getResultField() {
        return cy.get('#captchaControl');
    }

    getSubmitBtn() {
        return cy.get('#submitButton');
    }

    

}

export default new FeedbackPage();