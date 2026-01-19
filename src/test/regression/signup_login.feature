Feature: automationexercise application user signup functionality

    @UserSignUp_TC001 @Regression @TC001
    Scenario: New user signup to the automationexercise application
        Given User Visits HomePage
        When User Clicks on Signup
        Then user should be redirected to the signup page
        Then user should be able to enter the fresh user
        Then user should be able to enter the fresh email address
        Then user should be able to click on signup button
        Then user should be able to verify creation of new user
        Then user fill the user password information
        Then user fill the user DOB information
        Then user fill the user news letter information
        Then user fill the user special offers information
        Then user fill the user address information
            | country       | state    | city     | zipCode | mobileNumber |
            | United States | New York | New York | 10001   | 1234567890   |
        Then user should be able to submit the signup form
        Then user should be able to verify account created confirmation
        Then user clicks on continue button
        Then user should be able to verify loggedin user
        Then user should able to delete the account
        Then user verify the account deleted confirmation
        Then user clicks on continue button
        # Then user should be able to verify login page

    @UserLogin_TC002 @Regression @TC002
    Scenario:Login User with correct email and password
        Given User Visits HomePage
        When User Clicks on Signup
        Then user should be redirected to the signup page
        Then user login with correct email and password
            | emailaddress     | password   |
            | amlana@gmail.com | Password@1 |
        Then user should be able to verify loggedin user

    @UserLogin_TC003 @Regression @TC003
    Scenario:Login User with incorrect email and password
        Given User Visits HomePage
        When User Clicks on Signup
        Then user should be redirected to the signup page
        Then user login with incorrect email and password
            | emailaddress | password   |
            | xa@gmail.com | Password@1 |
        Then user should be able to verify login failed confirmation

    @UserLogin_TC004 @Regression @TC004
    Scenario:Logout User
        Given User Visits HomePage
        When User Clicks on Signup
        Then user should be redirected to the signup page
        Then user login with correct email and password
            | emailaddress     | password   |
            | amlana@gmail.com | Password@1 |
        Then user should be able to verify loggedin user
        Then user logout from the application
        Then user should be on login page

    @UserLogin_TC005 @Regression @TC005
    Scenario Outline:Register User with existing email
        Given User Visits HomePage
        When User Clicks on Signup
        Then user should be redirected to the signup page
        Then user should be able to enter existing username "<username>"
        Then user should be able to enter existing email address "<emailaddress>"
        Then user should be able to click on signup button
        Then user validate the error message "<errormessage>"
        Examples:
            | username  | emailaddress     | errormessage                 |
            | Amlana123 | amlana@gmail.com | Email Address already exist! |