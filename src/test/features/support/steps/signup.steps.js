const { Given, When, Then, And } = require('cucumber')
const assert = require('assert');
let user;
Given('I don\'t have a user', function(callback) {
    callback();
})

Given('I have an user', function(callback) {
    user = require('../../../seeds/data/users.seed')
    callback();
})

Given('I try to create a new user with the same credentials', function(callback) {
    const request = user;
    this.setSignupRequest(request);

    assert.equal(this.getSignupRequest(), request);
    callback();
})

Given('I fill the informations correctly', function(callback) {
    const request = {
        first_name: "teste",
        last_name: "name",
        email: "teste@teste.com",
        username: "teste@teste.com",
        password: "Password#2018"
    };

    this.setSignupRequest(request);

    assert.equal(this.getSignupRequest(), request);
    callback();
})

Given('I fill the informations with a week password with no uppercase character', function(callback) {
    const request = {
        first_name: "teste",
        last_name: "name",
        email: "teste@teste.com",
        username: "teste@teste.com",
        password: "password#2018"
    };

    this.setSignupRequest(request);

    assert.equal(this.getSignupRequest(), request);
    callback();
})

Given('I fill the informations with a week password with no lowercase character', function(callback) {
    const request = {
        first_name: "teste",
        last_name: "name",
        email: "teste@teste.com",
        username: "teste@teste.com",
        password: "PASSWORD#2018"
    };

    this.setSignupRequest(request);

    assert.equal(this.getSignupRequest(), request);
    callback();
})

Given('I fill the informations with a week password with no special character', function(callback) {
    const request = {
        first_name: "teste",
        last_name: "name",
        email: "teste@teste.com",
        username: "teste@teste.com",
        password: "Password2018"
    };

    this.setSignupRequest(request);

    assert.equal(this.getSignupRequest(), request);
    callback();
})

Given('I fill the informations with a week password with smaller than 8 characters', function(callback) {
    const request = {
        first_name: "teste",
        last_name: "name",
        email: "teste@teste.com",
        username: "teste@teste.com",
        password: "Pass#20"
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
        password: "Password#2018"
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
        password: "Password#2018"
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
        password: "Password#2018"
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

Given('I fill the informations with an email format invalid', function(callback) {
    const request = {
        first_name: "teste",
        last_name: "name",
        email: "teste.teste.com",
        username: "teste@teste.com",
        password: "Password#2018"
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