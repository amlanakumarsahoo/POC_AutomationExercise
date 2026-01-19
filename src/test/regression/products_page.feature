Feature: automationexercise application products page functionality

    @ProductsPage @VerifyProductsPage_TC001 @Regression @TC008
    Scenario: Verify All Products and product detail page
        Given User Visits HomePage
        When User Observes HomePage Title
        When User navigates to Products tab
        Then User should be redirected to All Products page
        Then User verifies product list
        Then User clicks on first product
        Then User landed to product detail page
        Then User verifies product name, category, price, availability, condition, brand

    @ProductsPage @SearchProducts_TC002 @Regression @TC009
    Scenario: Verify Search Products functionality
        Given User Visits HomePage
        When User Observes HomePage Title
        When User navigates to Products tab
        Then User should be redirected to All Products page
        Then User search for product "Blue Top"
        Then User clicks on first product
        Then User landed to product detail page
        Then User verifies product name, category, price, availability, condition, brand

    @ProductsPage @Search_Products_and_verify_cart_after_login_TC003 @Regression @TC020
    Scenario: Search Products and Verify Cart After Login
        Given User Visits HomePage
        When User Observes HomePage Title
        When User navigates to Products tab
        Then User should be redirected to All Products page
        Then User search for product "Blue Top"
        Then User verifies "Searched Products" is visible
        Then User verifies product details
        Then User click on view product from home page
        Then User click on Add to cart button
        Then User click on continue shopping button
        Then User navigates to cart page
        Then User validate with expected product quantity "1"
        Then User Clicks on Signup
        Then user login with correct email and password
            | emailaddress     | password   |
            | amlana@gmail.com | Password@1 |
        Then User navigates to cart page
        # Then User validate with expected product quantity "1"
        Then User remove product from cart
        Then User validate cart is empty
        Then User click on click here link
        Then User Observes HomePage Title
        Then title should match "Automation Exercise - All Products"


    @ProductsPage @AddReviewOnProduct_TC004 @Regression @TC021
    Scenario Outline:Add review on product
        Given User Visits HomePage
        When User Observes HomePage Title
        When User navigates to Products tab
        Then User should be redirected to All Products page
        Then User click on view product from home page
        Then User write review details
        Then User submit review
        Then User verifies review submitted
        Examples:
            | Name   | Emailaddress     | Review |
            | Amlana | amlana@gmail.com | Good   |
            | Ram    | ram@gmail.com    | Bad    |

    @ProductsPage @Add_to_cart_from_Recommended_items_TC005 @Regression @TC022
    Scenario: Add to cart from Recommended items
        Given User Visits HomePage
        When User Observes HomePage Title
        Then User verify "RECOMMENDED ITEMS" is visible
        Then User add recommended items to cart
        Then User click on view cart link
        # Then User verifies product details

    @ProductsPage @View_Category_Products_TC006 @Regression @TC018
    Scenario: View Category Products
        Given User Visits HomePage
        When User Observes HomePage Title
        Then User verify "Category" is visible
        Then User click on women category
        Then User click on dress subcategory
        Then verify women dress subcategory products are visible
        Then User click on men category
        Then User click on tshirts subcategory
        Then verify men tshirts subcategory products are visible

       