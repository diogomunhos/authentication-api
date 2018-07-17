class ResponseHelper {


    createSuccessResponse(object) {
        const jwt = require('jsonwebtoken');
        const token = jwt.sign({ user: object }, process.env.SECURE_KEY.split(',')[0]);
        return { statusCode: 200, response: { type: 'Bearer', token } };
    }

    createSignupSuccessResponse() {
        return { statusCode: 200, response: { message: "User created" } };
    }

    createFailResponse(statusCode, err) {
        return { statusCode, response: { type: err.name, message: err.message } };
    }
}

module.exports = new ResponseHelper();