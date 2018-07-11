class UserHelper {
    constructor() {
        this.macGyver = require('../../../seeds/data/users.seed');
    }

    getWrongCredentials() {
        return { username: this.macGyver.username, password: "wrongPassword" };
    }

    getNoUsernameCredentials() {
        return { username: null, password: this.macGyver.password };
    }

    getValidCredentials() {
        return { username: this.macGyver.username, password: this.macGyver.password };
    }

    getNoPasswordCredentials() {
        return { username: this.macGyver.username, password: null };
    }
}

module.exports = new UserHelper();