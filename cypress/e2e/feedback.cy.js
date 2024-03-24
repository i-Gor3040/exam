import user from "../fixtures/user.json";
import LoginPage from "../support/pages/LoginPage";
import HomePage from "../support/pages/HomePage";
import {fillAuthorizationFields} from "../support/helper";
import FeedbackPage from "../support/pages/FeedbackPage";
import {fa, faker} from '@faker-js/faker'

describe('Customer Feedback suite', () => {

    it('Submit a comment', () => {
        let comment = faker.lorem.sentence(7);
        
        cy.intercept('/rest/captcha/').as('captcha');
        cy.intercept('POST', 'https://juice-shop-sanitarskyi.herokuapp.com/api/Feedbacks/').as('feedbacks');

        cy.visit('/#/login');
        cy.wait(5000);
        LoginPage.dismissWelcomeBanner();
        fillAuthorizationFields(user.email, user.password);
        LoginPage.getLoginBtn().click();
        cy.wait(3000);

        HomePage.getSidenavBtn().click();
        HomePage.getFeedbackBtn().click();
        FeedbackPage.getCommentField().type(comment);
        FeedbackPage.getRatingSlider().click({force: true}).type('{rightarrow}');
        cy.wait('@captcha').then((intercept) => {
            let result = intercept.response.body.answer;
            FeedbackPage.getResultField().type(result); // I have troubles with passing result outside. What is the best practice here?
        })
        
        FeedbackPage.getSubmitBtn().click();

        cy.wait('@feedbacks').then(({response}) => {
            expect(response.statusCode).to.eq(201)
            expect(response.body.status).to.eq('success')
            expect(response.body.data.comment).to.eq(`${comment} (***r@yopmail.com)`)
        })
        
    })

})