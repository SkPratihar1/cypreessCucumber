
import FundingSelectors from '../../../page/selector'
import { fakeData }  from '../../../utils/data'

const selectors = new FundingSelectors();

class FundingPage {
  openFundingPage() {
    cy.get(selectors.fundAddIcon).click();
    cy.get(selectors.addFundingLink).should('exist').and('be.visible').click();
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
    cy.get('button[type="submit"]').click();
    //cy.contains('button', button).should('be.visible').click();
    //cy.contains('button', 'Save Details').should('be.visible').click();
  }

  verifySuccessMessage(successMessage:string) {
    cy.wait(2000)
    cy.contains(successMessage,{timeout:3000}).should('be.visible');
  }
  verifyAlertMessage(expectedMessage: string) {
    cy.wait(3000);
    cy.get('p.MuiFormHelperText-root.Mui-error').should('contain', expectedMessage);
      //cy.contains('p.MuiFormHelperText-root.Mui-error',expectedMessage).should('be.visible')
  }
}

export default FundingPage;
