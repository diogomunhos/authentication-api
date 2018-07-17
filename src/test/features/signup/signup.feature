Feature: Create a new user using authentication api
   Feature Description: I should be able to create a user using authentication api


    Scenario: Create a new user
        Given I don't have a user
        And I fill the informations correctly
        When I send the request to authentication api signup method
        Then I should receive a response with status code 200 and a message "User created"

    Scenario: Got error message when try to create a user with no last name
        Given I don't have a user
        And I fill the informations without last name
        When I send the request to authentication api signup method
        Then I should receive a response with status code 401 and a message "last name is required"

    Scenario: Got error message when try to create a user with no first name
        Given I don't have a user
        And I fill the informations without first name
        When I send the request to authentication api signup method
        Then I should receive a response with status code 401 and a message "first name is required"

    Scenario: Got error message when try to create a user with no email
        Given I don't have a user
        And I fill the informations without email
        When I send the request to authentication api signup method
        Then I should receive a response with status code 401 and a message "email is required"    

    Scenario: Got error message when try to create a user with no password
        Given I don't have a user
        And I fill the informations without password
        When I send the request to authentication api signup method
        Then I should receive a response with status code 401 and a message "password is required"