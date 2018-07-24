Feature: Create a new user using authentication api
   Feature Description: I should be able to create a user using authentication api


    Scenario: Create a new user
        Given I don't have a user
        And I fill the informations correctly
        When I send the request to authentication api signup method
        Then I should receive a response with status code 200 and a message "User created"
        And doing a search on the database the first_name and last_name are uppercase text, username and email are lowercase

    Scenario: Got an error message when try to create a user with no last name
        Given I don't have a user
        And I fill the informations without last name
        When I send the request to authentication api signup method
        Then I should receive a response with status code 401 and a message "Last name cannot be null"

    Scenario: Got an error message when try to create a user with no first name
        Given I don't have a user
        And I fill the informations without first name
        When I send the request to authentication api signup method
        Then I should receive a response with status code 401 and a message "First name cannot be null"

    Scenario: Got an error message when try to create a user with no email
        Given I don't have a user
        And I fill the informations without email
        When I send the request to authentication api signup method
        Then I should receive a response with status code 401 and a message "Email cannot be null"

    Scenario: Got an error message when try to create a user with no username
        Given I don't have a user
        And I fill the informations without username
        When I send the request to authentication api signup method
        Then I should receive a response with status code 401 and a message "Username cannot be null"    

    Scenario: Got an error message when try to create a user with invalid email format
        Given I don't have a user
        And I fill the informations with an email format invalid
        When I send the request to authentication api signup method
        Then I should receive a response with status code 401 and a message "Email format is invalid"

    Scenario: Got an error message when try to create a user with no password
        Given I don't have a user
        And I fill the informations without password
        When I send the request to authentication api signup method
        Then I should receive a response with status code 401 and a message "Password cannot be null"

    Scenario: Got an error message when try to create a user with no birthdate
        Given I don't have a user
        And I fill the informations without birthdate
        When I send the request to authentication api signup method
        Then I should receive a response with status code 401 and a message "Birthdate cannot be null"

    Scenario: Got an error message when try to create a user with an invalid birthdate
        Given I don't have a user
        And I fill the informations with an invalid birthdate
        When I send the request to authentication api signup method
        Then I should receive a response with status code 401 and a message "Birthdate is not a valid date, date must be MM/DD/AAAA"    

    Scenario: Got an error message when try to create a user with no document number
        Given I don't have a user
        And I fill the informations without document number
        When I send the request to authentication api signup method
        Then I should receive a response with status code 401 and a message "Document number cannot be null"

    Scenario: Got an error message when try to create a user with born country
        Given I don't have a user
        And I fill the informations without born country
        When I send the request to authentication api signup method
        Then I should receive a response with status code 401 and a message "Born country cannot be null"  

    Scenario: Got an error message when try to create a user already created
        Given I have an user 
        And I try to create a new user with the same credentials
        When I send the request to authentication api signup method
        Then I should receive a response with status code 401 and a message "User already exists"

    Scenario: Got an error message when try to create a user with week password with no uppercase character
        Given I don't have a user
        And I fill the informations with a week password with no uppercase character
        When I send the request to authentication api signup method
        Then I should receive a response with status code 401 and a message "The password must contain at least one lowercase alphabetical character, uppercase alphabetical character, one numeric character, one special character and be eight characters or longer"

    Scenario: Got an error message when try to create a user with week password with no lowercase character
        Given I don't have a user
        And I fill the informations with a week password with no lowercase character
        When I send the request to authentication api signup method
        Then I should receive a response with status code 401 and a message "The password must contain at least one lowercase alphabetical character, uppercase alphabetical character, one numeric character, one special character and be eight characters or longer"

    Scenario: Got an error message when try to create a user with week password with no special character
        Given I don't have a user
        And I fill the informations with a week password with no special character
        When I send the request to authentication api signup method
        Then I should receive a response with status code 401 and a message "The password must contain at least one lowercase alphabetical character, uppercase alphabetical character, one numeric character, one special character and be eight characters or longer"

    Scenario: Got an error message when try to create a user with week password smaller than 8 characters
        Given I don't have a user
        And I fill the informations with a week password with smaller than 8 characters
        When I send the request to authentication api signup method
        Then I should receive a response with status code 401 and a message "The password must contain at least one lowercase alphabetical character, uppercase alphabetical character, one numeric character, one special character and be eight characters or longer"