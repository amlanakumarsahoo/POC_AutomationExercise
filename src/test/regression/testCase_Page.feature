Feature: automationexercise application Test Case functionality

    @TestCasePage_TC001 @Regression @TC007
    Scenario: Test Case functionality
        Given User Visits HomePage
        When User Clicks on Test Cases tab
        Then user should be redirected to the test case page
        Then user verify the test case page title

