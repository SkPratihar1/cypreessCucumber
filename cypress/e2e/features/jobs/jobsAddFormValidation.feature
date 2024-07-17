@submit
Feature: Data-driven tests for job add




  @add
  Scenario Outline: Verify job add input form
    Given I am on the add Jobs page and open Add job Form
    When I enter details for the job add "<step>"
    And I submit details
    Then I verify alert message "<ExpectedAlertMessage>"
    

    Examples:
    | step  |ExpectedAlertMessage               |
    | step1 | Please enter a valid URL!         |
    | step2 | Please enter a valid LinkedIn URL!|
    | step3 | Employee Count is required        |
    | step4 | Job Link is required              |
    | step5 | Job Title is required             |
    | step6 |Company Headquarter is required    |
    | step7 | Please enter a valid URL!         |
    | step8 | Industry must have at least 2 characters |
    | step9 | Company Headquarter is required    |