Feature: Articles

    @ignore
    Scenario Outline: Add new post
        Given I am an authenticated user
        When I visit the home page
        And I create a post with title "<title>" and description "<description>" and content "<content>"
        Then I should see the new post detail page with title "<title>"
        Examples:
            | title          | description    | content        |
            | Cypress Test 3 | cypress test 3 | cypress test 3 |

    @ignore
    @articles
    Scenario: Like a post
        Given I am an authenticated user
        When I like a post
        Then the like count should be increased by one

    @ignore
    Scenario Outline: Filter by tags "<tag>"
        Given I am an authenticated user
        When I select the tag "<tag>"
        Then I should see only articles tagged with "<tag>"
        Examples:
            | tag       |
            | dragons   |
            | dragons2  |
            | dragons3  |
            | angularjs |
            | reactjs   |

    ## Scenario: Filter by tags show all articles tagged
    ## Scenario: Filter by tags shows only articles tagged (compare against api)
    ## Add test retries
@smoke
    Scenario Outline: Menus per "<role>"
        Given I am an authenticated user
        When I visit the home page
        Then I should have the corresponding menu items for role "<role>"
        Examples:
            | role    |
            | admin   |
            | user    |
            