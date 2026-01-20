Feature: automationexercise application Home Page functionality
As a User when I visit the automationexercise application
I should see a valid Title
@HomePage @HomePage_TC001 @Regression
Scenario: Home Page has a valid Title
Given User Visits HomePage
When User Observes HomePage Title
Then title should match "Automation Exercise"

@HomePage @SubscriptionHomePage_TC002 @Regression @TC010
Scenario: Verify Subscription in home page
Given User Visits HomePage
When User Observes HomePage Title
Then title should match "Automation Exercise"
Then Subscription should be visible
Then User enters email id and clicks on subscribe button
Then User should be able to verify subscription message "You have been successfully subscribed!"

@HomePage @ScrollUpHomePage_TC003 @Regression @TC025
Scenario:Verify Scroll Up using 'Arrow' button and Scroll Down
Given User Visits HomePage
When User Observes HomePage Title
Then title should match "Automation Exercise"
Then Subscription should be visible
Then User clicks on Scroll Up button with Arrow button

@HomePage @ScrollUpHomePage_TC004 @Regression @TC026
Scenario:Verify Scroll Up without 'Arrow' button and Scroll Down functionality
Given User Visits HomePage
When User Observes HomePage Title
Then title should match "Automation Exercise"
Then Subscription should be visible
Then User clicks on Scroll Up button without Arrow button
