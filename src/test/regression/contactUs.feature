Feature: automationexercise application Contact Us functionality

    @ContactUs @ContactUs_TC001 @Regression @TC006
    Scenario: Contact Us functionality
        Given User Visits HomePage
        When User Clicks on Contact Us
        Then user should be redirected to the contact us page
        When User fills the contact us form
            | Name     | Email                | Subject      | Message                 |
            | Amlana   | amlana@gmail.com     | Test Subject | This is a test message. |
        When User attaches a file
            | filepath                         |
            | resources/TestAttachmentFile.txt |
        When User submits the contact us form
        # Then user should be able to verify contact us confirmation
        When user navigate to home page
        Then user should be able to verify home page title



