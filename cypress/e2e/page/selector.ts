

class FormSelectors {
    get groupAddIcon() {
      return '[data-testid="GroupAddIcon"]';
    }
    get fundAddIcon() {
      return '[data-testid="PaidIcon"]';
    }
    get jobsIcon() {
      return '[data-testid="WorkIcon"]';
    }

    get addHiresLink() {
      return 'a[href="/admin/newHires/add-hires"]';
    }
    get addFundingLink() {
      return 'a[href="/admin/funding/add-funds"]';
    }
    get addJobsLink() {
      return 'a[href="/admin/jobs/add-jobs"]';
    }
    get firstNameInput() {
      return 'input[name="firstName"]';
    }
  
    get lastNameInput() {
      return 'input[name="lastName"]';
    }
  
    get positionInput() {
      return 'input[name="position"]';
    }
  
    get companyNameInput() {
      return 'input[name="companyName"]';
    }
  
    get companyHQInput() {
      return 'input[name="companyHQ"]';
    }
  
    get industryInput() {
      return 'input[name="industry"]';
    }
  
    get companyEmployeeCountInput() {
      return 'input[name="companyEmployeeCount"]';
    }
  
    get companyLinkedInInput() {
      return 'input[name="companyLinkedIn"]';
    }
  
    get companyWebsiteInput() {
      return 'input[name="companyWebsite"]';
    }
  
    get fundingRaisedInput() {
      return 'input[name="fundingRaised"]';
    }
    get jobTitleInput() {
      return 'input[name="jobTitle"]';
    }
  
    get jobLinkInput() {
      return 'input[name="jobLink"]';
    }
    get saveDetailsButton() {
      return 'button.MuiButton-containedPrimary';
    }
  
    get successMessage() {
      return 'div.MuiAlert-message.css-1xsto0d'; 
    }
  }
  
  export default FormSelectors;
  