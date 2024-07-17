
Feature: Admin Login and Excel Data

  Scenario: Verify row count and data in Excel file
    Given Admin login to the LeadHawk application
    When I read the Excel file
    Then I should see the correct number of rows
    And the data should be valid
