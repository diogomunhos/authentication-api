class SignupConfig {

    getAPIConfiguration() {
        return {
            uri: "/auth/signup",
            isJSON: true,
            method: "POST"
        }
    }

}

module.exports = new SignupConfig();