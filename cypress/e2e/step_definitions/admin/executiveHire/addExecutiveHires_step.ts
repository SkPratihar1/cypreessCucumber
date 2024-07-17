import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HiresPage from './executiveHire';
import AuthUtils from '../../../utils/authUtils'

const hiresPage = new HiresPage();

Given('Admin Sign-in to the application', () => {
  AuthUtils.login(Cypress.env('adminEmail'),Cypress.env('adminPassword'))
});

Given('Admin open Hires page , then click add Hires Button', () => {
  hiresPage.openHiresPage();
});

When('Admin Fill executive Hires Data ,then submit', () => {
 
  hiresPage.fillExecutiveHiresData();
  hiresPage.submitForm();
});

Then('Admin verify success message', () => {
  hiresPage.verifySuccessMessage("Executive hire added successfully");
});