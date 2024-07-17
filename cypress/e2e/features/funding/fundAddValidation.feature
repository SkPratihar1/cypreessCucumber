@submit
Feature: Data-driven tests for company details

  @add
  Scenario Outline: Verify company details
    Given I am on the company add Funding page
    When I enter details for "<CompanyName>" with HQ "<CompanyHQ>" in "<Industry>" having raised "<FundingRaised>" with "<EmployeeCount>" employees linked on "<CompanyLinkedIn>" and website "<CompanyWebsite>"
    And I submit details
    Then I verify alert message "<ExpectedAlertMessage>"

    Examples:
      | CompanyName    | CompanyHQ    | Industry    | FundingRaised    | EmployeeCount    | CompanyLinkedIn                                             | CompanyWebsite    | ExpectedAlertMessage                        |
      | Dulce          | Test         | Female      |  Great Britain   | 32               | https://in.linkedin.com/company/itobuz-technologies-pvt-ltd | https://webel.com | Funding Raised is required                  |
      | Mara           | Hashimoto    | Female      | 40000            | 25               | https://itobuz-technologies-pvt-ltd                         | https://tyon.com | Please enter a valid LinkedIn URL!           |
      | Philip         | Gent         | Male        | 9000             | 36               | https://in.linkedin.com/company/itobuz-technologies-pvt-ltd | https://tyon     | Please enter a valid URL!                    |
      | Kathleen       | Hanner       | Female      | 50000            | ty               | https://in.linkedin.com/company/itobuz-technologies-pvt-ltd | https://tyon.com | Employee Count is required                   |
      | N              | Magwood      | Female      | 400000           | 58               | https://in.linkedin.com/company/itobuz-technologies-pvt-ltd | https://tyon.com | Company Name must have at least 2 characters |
      | Gaston         | B            | Male        | 50000            | 24               | https://in.linkedin.com/company/itobuz-technologies-pvt-ltd | https://tyon.com | Company Headquarter must have at least 2 characters |
      | Etta           | Hurn         | F           | 5000             | 56               | https://in.linkedin.com/company/itobuz-technologies-pvt-ltd | https://tyon.com | Industry must have at least 2 characters            |
      | Earlean        | Melgar       | Female      |90009000000000009 | 27               | https://in.linkedin.com/company/itobuz-technologies-pvt-ltd | https://tyon.com |Funding Raised must be less than 9007199254740991    |
      | Vincenza       | Weiland      | Female      | 43434            | 40               | https://in.linkedin.com/company/itobuz-technologies-pvt-ltd | https://tyon.com | Funds added successfully         |
