import 'cypress-cucumber-preprocessor/steps';
before(() => {
    // This hook will run once before all tests
    // You can add any setup code here
    cy.log('Running setup before all tests');
  });
  import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})
