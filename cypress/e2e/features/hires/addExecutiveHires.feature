  Feature: Admin add Executive Hires

  Background: Before Test Scenarios
   Given Admin login to the application

  Scenario Outline: Successful add Executive Hires
    Given Admin open Hires page , then click add Hires Button
    When Admin Fill executive Hires Data ,then submit 
    Then Admin verify success message 
    