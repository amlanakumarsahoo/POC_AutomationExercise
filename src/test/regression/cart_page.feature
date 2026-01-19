Feature: automationexercise application Cart Page functionality
    As a User when I visit the automationexercise application
    I should see a valid Title

    @CartPage @CartPage_TC001 @Regression @TC011
    Scenario: Verify Subscription in Cart page
        Given User Visits HomePage
        When User Observes HomePage Title
        Then title should match "Automation Exercise"
        Then User clicks on Cart button
        Then user should be redirected to the cart page
        Then Subscription should be visible
        Then User enters email id and clicks on subscribe button
        Then User should be able to verify subscription message "You have been successfully subscribed!"

    @CartPage @AddProductsInCart_TC002 @Regression @TC012
    Scenario: Add Products in Cart
        Given User Visits HomePage
        When User Observes HomePage Title
        Then title should match "Automation Exercise"
        Then User navigates to Products tab
        Then User should be redirected to All Products page
        Then User add first product to cart
        Then User click on continue shopping button
        Then User add second product to cart
        Then User click on continue shopping button
        Then User navigates to cart page
        Then User verify price quantity and total price

    @CartPage @VerifyProductQuantityInCart_TC003 @Regression @TC013
    Scenario Outline:Verify Product quantity in Cart
        Given User Visits HomePage
        When User Observes HomePage Title
        Then title should match "Automation Exercise"
        Then User click on view product from home page
        Then User verifies product name, category, price, availability, condition, brand
        Then User increse the product quantity to "<quantity>"
        Then User click on Add to cart button
        Then User click on continue shopping button
        Then User navigates to cart page
        Then User validate with expected product quantity "<quantity>"

        Examples:
            | quantity |
            | 4        |

    @CartPage @Remove_Products_From_Cart_TC004 @Regression @TC017
    Scenario: Remove Products From Cart
        Given User Visits HomePage
        When User Observes HomePage Title
        Then title should match "Automation Exercise"
        Then User click on view product from home page
        Then User verifies product name, category, price, availability, condition, brand
        Then User click on Add to cart button
        Then User click on continue shopping button
        Then User navigates to cart page
        Then User validate with expected product quantity "1"
        Then User remove product from cart
        Then User validate cart is empty
        Then User click on click here link
        Then User Observes HomePage Title
        Then title should match "Automation Exercise - All Products"

    @CartPage @View_Cart_Brand_Products_TC005 @Regression @TC019
    Scenario Outline: View & Cart Brand Products
        Given User Visits HomePage
        When User Observes HomePage Title
        Then title should match "Automation Exercise"
        Then User navigates to Products tab
        Then User should be redirected to All Products page
        Then User select brand from products page "<brand>"
        Then selected brand products should be displayed "<product_title>"
        Examples:
            | brand  | product_title |
            | H&M    | H&M           |
            | Madame | Madame        |

