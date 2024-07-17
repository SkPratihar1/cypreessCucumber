import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import FundingPage from './funding';
import AuthUtils from '../../../utils/authUtils'

const fundingPage = new FundingPage();

Given('Admin login to the application', () => {
  AuthUtils.login(Cypress.env('adminEmail'),Cypress.env('adminPassword'))
});

Given('Admin open Funding page , then click Add Funding Button', () => {
    fundingPage.openFundingPage();
});

When("Admin Fill Funding input Data ,then click 'Save Details' button", () => {
 
    fundingPage.fillInputFundingData();
    fundingPage.submitForm();
});

Then('Admin verify successfully message', () => {
    fundingPage.verifySuccessMessage("Funds added successfully");
});