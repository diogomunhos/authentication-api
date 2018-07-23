const { Given, When, Then } = require('cucumber')
const assert = require('assert');
const userHelper = require('../helpers/user.helper');
const LoginConfig = require('../config/login.config');

Given('there I have an invalid username or password', function(callback) {
    this.setAPIConfig(LoginConfig.getAPIConfiguration());
    const credentials = userHelper.getWrongCredentials();
    this.setRequest(credentials);
    assert.equal(this.getRequest(), credentials);
    callback();
});

When('I send a request to authentication api login method', function(callback) {
    this.makeRequest().then((response) => {
        this.setResponse(response);
        callback();
    }).catch((response) => {
        this.setResponse(response);
        callback();
    });
})

Then('I should receive a status code {int} with a message {string}', function(statusCode, message, callback) {
    assert.notEqual(this.getResponse().statusCode, undefined, 'No status code founded, Is this server still running? ');
    assert.equal(this.getResponse().statusCode, statusCode);
    assert.equal(this.getResponse().error.message, message);
    callback();
})

Given('there I dont have an username', function(callback) {
    this.setAPIConfig(LoginConfig.getAPIConfiguration());
    const credentials = userHelper.getNoUsernameCredentials();
    this.setRequest(credentials);
    assert.equal(this.getRequest(), credentials);
    callback();
});

Given('there I dont have a password', function(callback) {
    this.setAPIConfig(LoginConfig.getAPIConfiguration());
    const credentials = userHelper.getNoPasswordCredentials();
    this.setRequest(credentials);
    assert.equal(this.getRequest(), credentials);
    callback();
});

Given('There I have a valid username and password', function(callback) {
    this.setAPIConfig(LoginConfig.getAPIConfiguration());
    const credentials = userHelper.getValidCredentials();

    this.setRequest(credentials);
    assert.equal(this.getRequest(), credentials);
    callback();
});

Then('I should receive a status code {int} with a token', function(statusCode, callback) {
    assert.notEqual(this.getResponse().statusCode, undefined, 'No status code founded, Is this server still running? ');
    assert.equal(this.getResponse().statusCode, statusCode);
    assert.notEqual(this.getResponse().body.token, null);
    callback();
})