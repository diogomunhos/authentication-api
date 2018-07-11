const { setWorldConstructor } = require('cucumber')
const http = require('request-promise');

class World {
    constructor() {
        this.credentials = {};
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

    makeLoginRequest() {
        return http({
            method: 'POST',
            uri: `http://localhost:${process.env.PORT}/auth/login`,
            body: this.credentials,
            json: true,
            resolveWithFullResponse: true
        })
    }


}

setWorldConstructor(World)