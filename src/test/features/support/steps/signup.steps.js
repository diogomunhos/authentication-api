const { Given, When, Then, And } = require('cucumber')
const assert = require('assert');

Given('I don\'t have a user', function(callback) {
    callback();
})

Given('I fill the informations correctly', function(callback) {
    const request = {
        first_name: "teste",
        last_name: "name",
        email: "teste@teste.com",
        username: "teste@teste.com",
        password: "123456"
    };

    this.setSignupRequest(request);

    assert.equal(this.getSignupRequest(), request);
    callback();
})

Given('I fill the informations without last name', function(callback) {
    const request = {
        first_name: "teste",
        email: "teste@teste.com",
        username: "teste@teste.com",
        password: "123456"
    };

    this.setSignupRequest(request);

    assert.equal(this.getSignupRequest(), request);
    callback();
})

Given('I fill the informations without first name', function(callback) {
    const request = {
        last_name: "name",
        email: "teste@teste.com",
        username: "teste@teste.com",
        password: "123456"
    };

    this.setSignupRequest(request);

    assert.equal(this.getSignupRequest(), request);
    callback();
})
Given('I fill the informations without email', function(callback) {
    const request = {
        first_name: "teste",
        last_name: "name",
        username: "teste@teste.com",
        password: "123456"
    };

    this.setSignupRequest(request);

    assert.equal(this.getSignupRequest(), request);
    callback();
})

Given('I fill the informations without password', function(callback) {
    const request = {
        first_name: "teste",
        last_name: "name",
        email: "teste@teste.com",
        username: "teste@teste.com"
    };

    this.setSignupRequest(request);

    assert.equal(this.getSignupRequest(), request);
    callback();
})

When('I send the request to authentication api signup method', function(callback) {
    this.makeSignupRequest().then((response) => {
        this.setResponse(response);
        callback();
    }).catch((response) => {
        this.setResponse(response);
        callback();
    });
})

Then('I should receive a response with status code {int} and a message {string}', function(statusCode, message, callback) {
    assert.notEqual(this.getResponse().statusCode, undefined, 'No status code founded, Is this server still running? ');
    assert.equal(this.getResponse().statusCode, statusCode);
    if (this.getResponse().body === undefined) {
        assert.equal(this.getResponse().error.message, message);
    } else {
        assert.equal(this.getResponse().body.message, message);
    }
    callback();
})