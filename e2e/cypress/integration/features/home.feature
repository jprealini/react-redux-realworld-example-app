Feature: Home login

    This feature will test all functionalities related to ui login

    @smoke
    Scenario Outline: Successfull UI login
        Given I visit the home page
        When  I sign in
        And I type user "<user>" and password "<password>"
        Then I should login
        Examples:
            | user                     | password |
            | jprealini@gmail.com      | jppooh74 |
            | acosta.a.jorge@gmail.com | cda07gal |

    @smoke
    Scenario: Access to new post editor
        Given I am an authenticated user
        When I visit the home page
        And I create a new post
        Then I should see the new post edit page

    @smoke
    Scenario Outline: Add new post
        Given I am an authenticated user
        When I visit the home page
        And I create a post with title "<title>" and description "<description>" and content "<content>"
        Then I should see the new post detail page with title "<title>"
        Examples:
            | title          | description    | content        |
            | Cypress Test 3 | cypress test 3 | cypress test 3 |

    @smoke
    @articles
    Scenario: Like a post
        Given I am an authenticated user
        When I visit the home page
        And I like a post
        Then the like count should be increased by one