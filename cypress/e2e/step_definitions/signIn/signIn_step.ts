import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the login page', () => {
  cy.visit('/auth');
});

When('I log in with username {string} and password {string}', (username: string, password: string) => {
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

Then('I should see the dashboard URL {string}', (url: string) => {
  cy.url().should('include', url);
});
Then('I should see {string} on the dashboard', (welcomeMessage: string) => {
  cy.get('.primaryHeader').should('contain', welcomeMessage);
});
