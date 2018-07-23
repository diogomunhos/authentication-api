class LoginConfig {

    getAPIConfiguration() {
        return {
            uri: "/auth/login",
            isJSON: true,
            method: "POST"
        }
    }

}

module.exports = new LoginConfig();