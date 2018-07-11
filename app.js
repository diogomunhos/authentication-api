const server = require('./src/main/config/server/server');
server.init();
server.start();

// const express = require('express');
// const jwt = require('jsonwebtoken');
// const bodyParser = require('body-parser');
// const app = express();

// if (process.env.NODE_ENV !== "production") {
//     const dotenv = require('dotenv');
//     dotenv.config();
// }

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// app.post('/auth/login', (req, res) => {
//     console.log(req.body.username);
//     if (req.body.username == "diogomunhos@gmail.com") {
//         const secure_key = process.env.SECURE_KEY.split(",")[0];
//         const token = jwt.sign(mockUser, secure_key);
//         res.status(200).send({ token });
//     } else {
//         res.status(401).send({ errorMessage: "Usuário inválido" });
//     }
// })

// app.use('/auth/authorization', (req, res, next) => {
//     let token = req.get('Authorization');
//     token = token.split(' ')[1];
//     const primary_key = process.env.SECURE_KEY.split(",")[0];
//     const secundary_key = process.env.SECURE_KEY.split(",")[1];
//     const decode = jwt.verify(token, primary_key, (err, decoded) => {
//         if (err == null) {
//             //todo verificar usuário ativo. 
//         } else {
//             res.status(401).send({ message: err.message });
//         }
//         console.log('Error: ', err);
//         console.log('Decoded', decoded);
//         next();
//     })
// }, (req, res) => {
//     res.status(200).send({ teste: "teste" });
// })


// const PORT = process.env.PORT;

// app.listen(PORT, () => {
//     console.log(`server running on port ${PORT}`);
// })