Feature: Login using authentication api
   Feature Description: I should be able to login using authentication api and receive a token to access the private graphql api

    Scenario: Try to login with invalid username
        Given there I have an invalid username or password
        When I send a request to authentication api login method
        Then I should receive a status code 401 with a message "Username or password is invalid."

    Scenario: Try to login with no username
        Given there I dont have an username
        When I send a request to authentication api login method
        Then I should receive a status code 401 with a message "Username cannot be null"

    Scenario: Try to login with no username
        Given there I dont have a password
        When I send a request to authentication api login method
        Then I should receive a status code 401 with a message "Password cannot be null"

    Scenario: Login Successful
        Given There I have a valid username and password
        When I send a request to authentication api login method
        Then I should receive a status code 200 with a token
    