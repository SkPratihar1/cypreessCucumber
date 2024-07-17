import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import FundingPage from './funding';
import AuthUtils from '../../../utils/authUtils'
import FundingSelectors from '../../../page/selector'

const fundingPage = new FundingPage();
const selectors = new FundingSelectors();

Given('I am on the company add Funding page after admin login', () => {
  AuthUtils.login(Cypress.env('adminEmail'),Cypress.env('adminPassword'));
  fundingPage.openFundingPage();

});

When('I enter details for CompanyName,CompanyHQ Industry having raised FundingRaised with EmployeeCount employees linked on CompanyLinkedIn and website CompanyWebsite', (companyName:string, companyHQ:string, industry:string, fundingRaised:string, employeeCount:string, companyLinkedIn:string, companyWebsite:string) => {
    // Perform action to view details for the given company with all provided details
    cy.get(selectors.companyNameInput).type(companyName);
    cy.get(selectors.companyHQInput).type(companyHQ);
    cy.get(selectors.industryInput).type(industry);
    cy.get(selectors.fundingRaisedInput).type(fundingRaised);
    cy.get(selectors.companyEmployeeCountInput).type(employeeCount);
    cy.get(selectors.companyLinkedInInput).type(companyLinkedIn);
    cy.get(selectors.companyWebsiteInput).type(companyWebsite);
    
  });

When("I submit button", () => {
 
   
    fundingPage.submitForm();
});

Then('I verify alert message', () => {
    //fundingPage.verifySuccessMessage("Funds added successfully");
});