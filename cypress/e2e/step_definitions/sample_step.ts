import { Given,Then } from '@badeball/cypress-cucumber-preprocessor';
//import { homePage } from '../../pages/homePage';

Given('I visit the home page', () => {
  cy.visit('/auth')
});

Then('I should see the title', () => {
  //homePage.getTitle().should('include', 'Example Domain');
  cy.get('.login_btn.group')
      .contains('SIGN UP')
      .click();
});