
import JobsSelectors from '../../../page/selector'
import { fakeData }  from '../../../utils/data'

const selectors = new JobsSelectors();

class JobsPage {
  openJobsPage() {
    cy.get(selectors.jobsIcon,{timeout:3000}).click();
    cy.get(selectors.addJobsLink,{timeout:3000}).should('exist').and('be.visible').click();
    
  }
  addJobsForm(){
    cy.get(selectors.addJobsLink).should('exist').and('be.visible').click();

  }
  fillInputFundingData() {
    cy.get(selectors.companyNameInput).type(fakeData.companyName);
    cy.get(selectors.companyHQInput).type(fakeData.companyHQ);
    cy.get(selectors.industryInput).type(fakeData.industry);
    cy.get(selectors.fundingRaisedInput).type(fakeData.fundingRaised);
    cy.get(selectors.companyEmployeeCountInput).type(fakeData.companyEmployeeCount);
    cy.get(selectors.companyLinkedInInput).type(fakeData.companyLinkedIn);
    cy.get(selectors.companyWebsiteInput).type(fakeData.companyWebsite);
  }

  submitForm() {
    //cy.get(selectors.saveDetailsButton).should('exist').and('be.visible');
    cy.wait(2000)
    //cy.get('button[type="submit"]').click();
    //cy.contains('button', button).should('be.visible').click();
    cy.contains('button', 'Save Details').should('be.visible').click();
  }

  verifySuccessMessage(successMessage:string) {
    cy.wait(2000)
    cy.contains(successMessage,{timeout:3000}).should('be.visible');
  }
  verifyAlertMessage(expectedMessage: string) {
    cy.wait(3000);
    ///cy.get('p.MuiFormHelperText-root.Mui-error').should('contain', expectedMessage);
    //cy.get('[data-layer="Content"]').should('contain', expectedMessage)
      //cy.contains('p.MuiFormHelperText-root.Mui-error',expectedMessage).should('be.visible')
      cy.get('p.MuiFormHelperText-root.Mui-error').should(($el) => {
        const text = $el.text().trim();
        expect(text).to.include(expectedMessage.trim());
      });
  }
}

export default JobsPage;
