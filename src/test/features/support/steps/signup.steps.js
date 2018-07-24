const { Given, When, Then, And } = require('cucumber')
const assert = require('assert');
let user;
const SignupConfig = require('../config/signup.config');
const UserHelper = require('../helpers/user.helper');

Given('I don\'t have a user', function(callback) {
    this.setAPIConfig(SignupConfig.getAPIConfiguration());
    callback();
})

Given('I have an user', function(callback) {
    user = require('../../../seeds/data/users.seed')
    this.setAPIConfig(SignupConfig.getAPIConfiguration());
    callback();
})

Given('I try to create a new user with the same credentials', function(callback) {
    const request = user;
    this.setRequest(request);
    assert.equal(this.getRequest(), request);
    callback();
})

Given('I fill the informations correctly', function(callback) {
    const request = UserHelper.getValidUser();
    this.setRequest(request);
    assert.equal(this.getRequest(), request);
    callback();
})

Given('I fill the informations with a week password with no uppercase character', function(callback) {
    const request = UserHelper.getSignupUserWithWeekPasswordUpperCase();
    this.setRequest(request);
    assert.equal(this.getRequest(), request);
    callback();
})

Given('I fill the informations with a week password with no lowercase character', function(callback) {
    const request = UserHelper.getSignupUserWithWeekPasswordLowerCase();
    this.setRequest(request);
    assert.equal(this.getRequest(), request);
    callback();
})

Given('I fill the informations with a week password with no special character', function(callback) {
    const request = UserHelper.getSignupUserWithWeekPasswordSpecialCharacter();
    this.setRequest(request);
    assert.equal(this.getRequest(), request);
    callback();
})

Given('I fill the informations with a week password with smaller than 8 characters', function(callback) {
    const request = UserHelper.getSignupUserWithWeekPasswordLength();
    this.setRequest(request);
    assert.equal(this.getRequest(), request);
    callback();
})

Given('I fill the informations without last name', function(callback) {
    const request = UserHelper.getSignupUserWithoutLastName();
    this.setRequest(request);
    assert.equal(this.getRequest(), request);
    callback();
})

Given('I fill the informations without first name', function(callback) {
    const request = UserHelper.getSignupUserWithoutFirstName();
    this.setRequest(request);
    assert.equal(this.getRequest(), request);
    callback();
})

Given('I fill the informations without birthdate', function(callback) {
    const request = UserHelper.getSignupUserWithoutBirthDate();
    this.setRequest(request);
    assert.equal(this.getRequest(), request);
    callback();
})

Given('I fill the informations without document number', function(callback) {
    const request = UserHelper.getSignupUserWithoutDocumentNumber();
    this.setRequest(request);
    assert.equal(this.getRequest(), request);
    callback();
})

Given('I fill the informations with an invalid birthdate', function(callback) {
    const request = UserHelper.getSignupUserWithInvalidBirthDate();
    this.setRequest(request);
    assert.equal(this.getRequest(), request);
    callback();
})

Given('I fill the informations without born country', function(callback) {
    const request = UserHelper.getSignupUserWithoutBornCountry();
    this.setRequest(request);
    assert.equal(this.getRequest(), request);
    callback();
})

Given('I fill the informations without email', function(callback) {
    const request = UserHelper.getSignupUserWithoutEmail();
    this.setRequest(request);
    assert.equal(this.getRequest(), request);
    callback();
})

Given('I fill the informations without username', function(callback) {
    const request = UserHelper.getSignupUserWithoutUsername();
    this.setRequest(request);
    assert.equal(this.getRequest(), request);
    callback();
})

Given('I fill the informations without password', function(callback) {
    const request = UserHelper.getSignupUserWithoutPassword();
    this.setRequest(request);
    assert.equal(this.getRequest(), request);
    callback();
})

Given('I fill the informations with an email format invalid', function(callback) {
    const request = UserHelper.getSignupUserWithInvalidEmail();
    this.setRequest(request);
    assert.equal(this.getRequest(), request);
    callback();
})

When('I send the request to authentication api signup method', function(callback) {
    this.makeRequest().then((response) => {
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

Then('doing a search on the database the first_name and last_name are uppercase text, username and email are lowercase', async function() {
    const userModel = require('../../../../main/models/user.model');
    const request = this.getRequest();
    const user = await userModel.find({ username: String(request.username).toLowerCase() }).exec();
    assert.strictEqual(user[0].first_name, String(request.first_name).toUpperCase());
    assert.strictEqual(user[0].last_name, String(request.last_name).toUpperCase());
    assert.strictEqual(user[0].username, String(request.username).toLowerCase());
    assert.strictEqual(user[0].email, String(request.email).toLowerCase());
})