class ResponseHelper {


    createSuccessResponse(object) {
        const jwt = require('jsonwebtoken');
        const token = jwt.sign({ user: object }, process.env.SECURE_KEY.split(',')[0]);
        return { statusCode: 200, response: { type: 'Bearer', token } };
    }

    createFailResponse(statusCode, err) {
        // let i = 0;
        // while (i < 1000000) {
        //     i++;
        //     console.log(i);
        // }
        return { statusCode, response: { type: err.name, message: err.message } };
    }
}

module.exports = new ResponseHelper();