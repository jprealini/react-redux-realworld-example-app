Feature: Home login

    This feature will test all functionalities related to ui login

    @smoke
    Scenario: Successfull UI login
        Given I visit the home page
        When  I sign in
        And I type user and password
        Then I should login

    @smoke
    Scenario: Access to new post editor
        Given I am an authenticated user
        When I visit the home page
        And I create a new post
        Then I should see the new post edit page

   