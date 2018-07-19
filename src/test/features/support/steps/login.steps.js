const { Given, When, Then } = require('cucumber')
const assert = require('assert');
const userHelper = require('../helpers/user.helper')

Given('there I have an invalid username or password', function(callback) {
    const credentials = userHelper.getWrongCredentials();
    this.setCredentials(credentials);
    assert.equal(this.getCredentials(), credentials);
    callback();
});

When('I send a request to authentication api login method', function(callback) {
    this.makeLoginRequest().then((response) => {
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
    const credentials = userHelper.getNoUsernameCredentials();
    this.setCredentials(credentials);
    assert.equal(this.getCredentials(), credentials);
    callback();
});

Given('there I dont have a password', function(callback) {
    const credentials = userHelper.getNoPasswordCredentials();
    this.setCredentials(credentials);
    assert.equal(this.getCredentials(), credentials);
    callback();
});

Given('There I have a valid username and password', function(callback) {
    const credentials = userHelper.getValidCredentials();

    this.setCredentials(credentials);
    assert.equal(this.getCredentials(), credentials);
    callback();
});

Then('I should receive a status code {int} with a token', function(statusCode, callback) {
    assert.notEqual(this.getResponse().statusCode, undefined, 'No status code founded, Is this server still running? ');
    assert.equal(this.getResponse().statusCode, statusCode);
    assert.notEqual(this.getResponse().body.token, null);
    callback();
})