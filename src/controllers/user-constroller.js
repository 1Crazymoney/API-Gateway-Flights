const {StatusCodes} = require('http-status-codes');
const {UserService} = require('../services');
const { response } = require('express');
const { error } = require('winston');

const {SuccessResponse,ErrorResponse} = require('../utils/common');


/**
 * POST: /signup
 * req-body {email:'sample-email@gmail.com',password:'Sample@2324'}
 */

async function signUp(req, res) {
    try {
        const user = await UserService.createUser({
            email: req.body.email,
            password: req.body.password
        });
        SuccessResponse.data = user;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);


    }

}

async function signIn(req, res) {
    try {
        const user = await UserService.signIn({
            email: req.body.email,
            password: req.body.password
        });
        SuccessResponse.data = user;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);


    }

}


module.exports = {
    signUp,
    signIn

}