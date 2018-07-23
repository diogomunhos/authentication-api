const { setWorldConstructor } = require('cucumber')
const http = require('request-promise');

class World {
    constructor() {
        this.credentials;
        this.request;
        this.response;
        this.config;
    }

    setAPIConfig(config) {
        this.config = config;
    }

    setResponse(response) {
        this.response = response;
    }

    getResponse() {
        return this.response;
    }

    setRequest(request) {
        this.request = request;
    }

    getRequest() {
        return this.request;
    }

    makeRequest() {
        return http({
            method: this.config.method,
            uri: `http://localhost:${process.env.PORT}${this.config.uri}`,
            body: this.getRequest(),
            json: this.config.isJSON,
            resolveWithFullResponse: true
        })
    }

}

setWorldConstructor(World)