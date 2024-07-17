
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import FundingPage from './funding';
import AuthUtils from '../../../utils/authUtils'
import FundingSelectors from '../../../page/selector'

const fundingPage = new FundingPage();
const selectors = new FundingSelectors();



  

Given('I am on the company add Funding page', () => {
  AuthUtils.login(Cypress.env('adminEmail'),Cypress.env('adminPassword'));
  fundingPage.openFundingPage();
});

When('I enter details for {string} with HQ {string} in {string} having raised {string} with {string} employees linked on {string} and website {string}', 
  (companyName:string, companyHQ:string, industry:string, fundingRaised:string, employeeCount:string, companyLinkedIn:string, companyWebsite:string) => {
    cy.get(selectors.companyNameInput).type(companyName);
    cy.get(selectors.companyHQInput).type(companyHQ);
    cy.get(selectors.industryInput).type(industry);
    cy.get(selectors.fundingRaisedInput).type(fundingRaised);
    cy.get(selectors.companyEmployeeCountInput).type(employeeCount);
    cy.get(selectors.companyLinkedInInput).type(companyLinkedIn);
    cy.get(selectors.companyWebsiteInput).type(companyWebsite);
  
});

When('I submit details', () => {
  //cy.get('button[type="submit"]').click();
  fundingPage.submitForm()
});

Then('I verify alert message {string}', (expectedAlertMessage:string) => {
  fundingPage.verifyAlertMessage(expectedAlertMessage)
  // cy.wait(3000)
  // cy.get('p.MuiFormHelperText-root.Mui-error').should('contain', expectedAlertMessage);
});
