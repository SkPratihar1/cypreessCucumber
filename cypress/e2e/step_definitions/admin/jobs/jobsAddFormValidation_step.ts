import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import AuthUtils from '../../../utils/authUtils'
import JobsPage from './addJobs';
import JobsSelectors from '../../../page/selector'
import { pause } from 'webdriverio/build/commands/browser';

const jobsPage = new JobsPage()
const selectors = new JobsSelectors();
interface JobsDetails {
    "Job Title":string,
    "Job Link":string,
    "Company Name": string;
    "Company HQ": string;
    "Industry": string;
    "Employee Count": number;
    "Company LinkedIn": string;
    "Company Website": string;
  }
  
  interface Data {
    [key: string]: JobsDetails;
  }


// Given('Admin Sign-in to the application', () => {
//     AuthUtils.login(Cypress.env('adminEmail'),Cypress.env('adminPassword'))
//   });

// beforeEach(() => {
//     // Runs before all tests
//     // cy.visit('/login');
//     // cy.get('#email').type('admin@example.com');
//     // cy.get('#password').type('adminPassword');
//     // cy.get('#loginButton').click();
//     AuthUtils.login(Cypress.env('adminEmail'),Cypress.env('adminPassword'))
//   });
  
//   afterEach(() => {
//     // Runs after all tests
//     // Add any cleanup steps here
//     cy.clearCookies();
//     cy.clearLocalStorage();
//   });
  
  Given('I am on the add Jobs page and open Add job Form', () => {
   
    AuthUtils.login(Cypress.env('adminEmail'),Cypress.env('adminPassword'))
    // cy.visit('/admin/jobs?page=1&count=25&tab=live');
    jobsPage.openJobsPage();
    //jobsPage.addJobsForm();

  });

  When('I enter details for the job add {string}',(step: keyof Data) => {
    //   cy.pause()
    cy.fixture('jobsData').then((data: Data) => {
        const companyJobsDetails = data[step];
        if (!companyJobsDetails) {
          throw new Error(`No data found for step: ${step}`);
          
        }
        cy.get(selectors.jobTitleInput).type(companyJobsDetails["Job Title"]);
        cy.get(selectors.jobLinkInput).type(companyJobsDetails["Job Link"]);

        cy.get(selectors.companyNameInput).type(companyJobsDetails["Company Name"]);
        cy.get(selectors.companyHQInput).type(companyJobsDetails["Company HQ"]);
        cy.get(selectors.industryInput).type(companyJobsDetails["Industry"]);
       
        cy.get(selectors.companyEmployeeCountInput).type(companyJobsDetails["Employee Count"].toString());
        cy.get(selectors.companyLinkedInInput).type(companyJobsDetails["Company LinkedIn"]);
        cy.get(selectors.companyWebsiteInput).type(companyJobsDetails["Company Website"]);
        
      });
    
     Then("I submit details" ,()=>{
        jobsPage.submitForm()

     })
     Then ("I verify alert message {string}",(expectedAlertMessage:string)=>{
        jobsPage.verifyAlertMessage(expectedAlertMessage)
    

     })
     
    //  Then('I verify all alert messages for step {string}', (step: keyof Data) => {
    //     cy.fixture('companyData').then((data: Data) => {
    //       const companyDetails = data[step];
    //       if (!companyDetails || !companyDetails.ExpectedAlertMessages) {
    //         throw new Error(`No expected alert messages found for step: ${step}`);
    //       }
    //       const alertMessages = companyDetails.ExpectedAlertMessages;
    //       for (const [fieldId, expectedMessage] of Object.entries(alertMessages)) {
    //         cy.get(`#${fieldId}`).should('have.text', expectedMessage.trim());
    //       }
    //     });

  });