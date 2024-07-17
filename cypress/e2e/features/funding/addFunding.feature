Feature: Admin add Funding

  Background: Before Test Scenarios
   Given Admin login to the application

  Scenario Outline: Successful Add Funding
    Given Admin open Funding page , then click Add Funding Button
    When Admin Fill Funding input Data ,then click 'Save' button
    Then Admin verify successfully message