const { setWorldConstructor } = require('cucumber')
const http = require('request-promise');

class World {
    constructor() {
        this.credentials = {};
        this.signup_request = {};
        this.response = null;
    }

    setResponse(response) {
        this.response = response;
    }

    setCredentials(credentials) {
        this.credentials = credentials;
    }

    getCredentials() {
        return this.credentials;
    }

    getResponse() {
        return this.response;
    }

    setSignupRequest(signup_request) {
        this.signup_request = signup_request;
    }

    getSignupRequest() {
        return this.signup_request;
    }


    makeLoginRequest() {
        return http({
            method: 'POST',
            uri: `http://localhost:${process.env.PORT}/auth/login`,
            body: this.credentials,
            json: true,
            resolveWithFullResponse: true
        })
    }

    makeSignupRequest() {
        return http({
            method: 'POST',
            uri: `http://localhost:${process.env.PORT}/auth/signup`,
            body: this.signup_request,
            json: true,
            resolveWithFullResponse: true
        })
    }


}

setWorldConstructor(World)