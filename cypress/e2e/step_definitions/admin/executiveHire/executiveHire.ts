
import HiresSelectors from '../../../page/selector'
import { fakeData }  from '../../../utils/data'

const selectors = new HiresSelectors();

class HiresPage {
  openHiresPage() {
    cy.get(selectors.groupAddIcon).click();
    cy.get(selectors.addHiresLink).should('exist').and('be.visible').click();
  }

  fillExecutiveHiresData() {
    cy.get(selectors.firstNameInput).type(fakeData.firstName);
    cy.get(selectors.lastNameInput).type(fakeData.lastName);
    cy.get(selectors.positionInput).type(fakeData.position);
    cy.get(selectors.companyNameInput).type(fakeData.companyName);
    cy.get(selectors.companyHQInput).type(fakeData.companyHQ);
    cy.get(selectors.industryInput).type(fakeData.industry);
    cy.get(selectors.companyEmployeeCountInput).type(fakeData.companyEmployeeCount);
    cy.get(selectors.companyLinkedInInput).type(fakeData.companyLinkedIn);
    cy.get(selectors.companyWebsiteInput).type(fakeData.companyWebsite);
  }

  submitForm() {
    cy.get(selectors.saveDetailsButton).should('exist').and('be.visible');
    cy.contains('button', 'Save Details').should('be.visible').click();
  }

  verifySuccessMessage(successMessage:string) {
    cy.contains(successMessage,{timeout:3000}).should('be.visible');
  }
}


export default HiresPage;

  