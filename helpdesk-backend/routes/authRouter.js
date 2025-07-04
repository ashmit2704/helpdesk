const express = require('express');
const authController = require('../controller/authController');

const authRouter = express.Router();

// authRouter.post('/signup', authController.postSignUp);
authRouter.post('/login', authController.postLogin);
// authRouter.get('/forgetPassword', authController.postForgetPassword);

module.exports = authRouter;