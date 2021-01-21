const { Then } = require('cypress-cucumber-preprocessor/steps');


Then('I see the header', () => {
    cy.get('h1').contains('Vue boilerplate component');
});