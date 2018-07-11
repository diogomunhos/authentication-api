class ModelHelper {

    createLoginRequestObject(username, password) {
        return { username, password };
    }
}

module.exports = new ModelHelper();