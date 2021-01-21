const { When, Then } = require('cypress-cucumber-preprocessor/steps');


When('I go home', () => {
    cy.visit('/');
});

Then('the url is {word}', (url) => {
    cy.url()
        .should('eq', `${Cypress.config().baseUrl}${url}`);
});