

    Feature: Login and Dashboard Verification

    Scenario Outline: Successful login and dashboard verification
        Given I open the login page
        When I log in with username "<username>" and password "<password>"
        Then I should see the dashboard URL "<url>"
        And I should see "<welcomeMessage>" on the dashboard

        Examples:
      | username                   | password         | url                  | welcomeMessage      |                                                                                                         
      | test+1@itobuz.com          | Itobuz#1234      | /admin/dashboard     | Admin Dashboard     |
      | pratihar+deo@itobuz.com    | Itobuz#1234      | /data/dataHires      | New Executive Hires |
      | pratihar+dev@itobuz.com    | Itobuz#1234      | /myLeads             | My Leads            |
        

   