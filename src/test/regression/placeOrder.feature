Feature: automationexercise application Place Order functionality

    @PlaceOrder @PlaceOrder_TC001 @Regression @TC014
    Scenario:Place Order: Register while Checkout
        Given User Visits HomePage
        When User Observes HomePage Title
        Then title should match "Automation Exercise"
        Then User click on view product from home page
        Then User verifies product name, category, price, availability, condition, brand
        Then User click on Add to cart button
        Then User click on continue shopping button
        Then User navigates to cart page
        Then User validate with expected product quantity "1"
        Then User click on Proceed To Checkout button
        Then User click on Register Login button
        Then User signup and create account
        Then user should be able to verify loggedin user
        Then User navigates to cart page
        Then user should be redirected to the cart page
        Then User click on Proceed To Checkout button
        Then User verify address details and review order
        Then User enter description
        Then User click on place order button
        Then User Enter payment details
        Then User Confirm order
        Then User verify congatulations message
        Then user should able to delete the account
        Then user verify the account deleted confirmation
        Then user clicks on continue button

    @PlaceOrder @VerifyAddressDetailsInCheckoutPage_TC002 @Regression @TC023
    Scenario: Verify address details in checkout page
        Given User Visits HomePage
        When User Observes HomePage Title   
        Then title should match "Automation Exercise"
        Then User Clicks on Signup
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
        Then User click on view product from home page
        Then User verifies product name, category, price, availability, condition, brand
        Then User click on Add to cart button
        Then User click on continue shopping button
        Then User navigates to cart page
        Then User click on Proceed To Checkout button
        Then User verify address details and review order
        Then User enter description
        Then user should able to delete the account
        Then user verify the account deleted confirmation
        Then user clicks on continue button

    @PlaceOrder @DownloadInvoiceAfterPurchaseOrder_TC003 @Regression @TC024
    Scenario:Download Invoice after purchase order
        Given User Visits HomePage
        When User Observes HomePage Title   
        Then title should match "Automation Exercise"
        Then User click on view product from home page
        Then User verifies product name, category, price, availability, condition, brand
        Then User click on Add to cart button
        Then User click on continue shopping button
        Then User Clicks on Signup
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
        Then User navigates to cart page
        Then User click on Proceed To Checkout button
        Then User verify address details and review order
        Then User enter description
        Then User clicks on place order button
        Then User Enter payment details
        Then User Confirm order
        Then User verify congatulations message
        Then User Download Invoice & verify invoice downloaded
        Then user should able to delete the account
        Then user verify the account deleted confirmation
        Then user clicks on continue button
  
    @PlaceOrder @PlaceOrder_TC015 @Regression @TC015
    Scenario:Place Order: Register before Checkout
    Given User Visits HomePage
        When User Observes HomePage Title   
        Then title should match "Automation Exercise"
        Then User Clicks on Signup
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
        Then User click on view product from home page
        Then User verifies product name, category, price, availability, condition, brand
        Then User click on Add to cart button
        Then User click on continue shopping button
        Then User navigates to cart page
        Then User click on Proceed To Checkout button
        Then User verify address details and review order
        Then User enter description
        Then User clicks on place order button
        Then User Enter payment details
        Then User Confirm order
        Then User verify congatulations message
        Then user should able to delete the account
        Then user verify the account deleted confirmation
        Then user clicks on continue button
    

    @PlaceOrder @PlaceOrder_TC016 @Regression @TC016
    Scenario:Place Order: Login before Checkout
       Given User Visits HomePage
        When User Clicks on Signup
        Then user should be redirected to the signup page
        Then user login with correct email and password
            | emailaddress     | password   |
            | amlana@gmail.com | Password@1 |
        Then user should be able to verify loggedin user
        Then User click on view product from home page
        Then User verifies product name, category, price, availability, condition, brand
        Then User click on Add to cart button
        Then User click on continue shopping button
        Then User navigates to cart page
        Then User click on Proceed To Checkout button
        Then User verify address details and review order
        Then User enter description
        Then User clicks on place order button
        Then User Enter payment details
        Then User Confirm order
        Then User verify congatulations message

