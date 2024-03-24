export function fillAuthorizationFields(email, password) {
    email ? cy.get('#email').type(email) : cy.log('email field not filled');
    password ? cy.get('#password').type(password) : cy.log('password field not filled');
}

export function findProduct(productName) {
    cy.get('body').then(($body) => {
        if ($body.text().includes(productName)) {
            cy.contains(productName).parentsUntil('.mat-grid-tile-content').find('button').click();
        } else {
            cy.log('No product found')
        }
    })
}