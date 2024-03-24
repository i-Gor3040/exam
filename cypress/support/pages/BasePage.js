export default class BasePage {
 
  dismissWelcomeBanner() {
    cy.get("body").then(($body) => {
      if ($body.text().includes("Welcome to OWASP Juice Shop!")) {
        cy.get('[aria-label="Close Welcome Banner"]').click();
      }else {
        cy.log("No banner")
      }
    })
  }

  getAccount() {
    return cy.get("#navbarAccount");
  }

  getLoginBtn() {
    return cy.get("#navbarLoginButton");
  }
}