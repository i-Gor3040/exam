import BasePage from "./BasePage";

class HomePage extends BasePage {

    getBasketBtn() {
        return cy.get('[aria-label="Show the shopping cart"]');
    }
    
    getSidenavBtn() {
        return cy.get('[aria-label="Open Sidenav"]');
    }

    getFeedbackBtn() {
        return cy.contains(' Customer Feedback ');
    }

}

export default new HomePage()