const express = require('express');
const router = express.Router();

const {UserController} = require('../../controllers');

router
    .post('/signup',
        UserController.signUp
)

router
    .post('/signin',
        UserController.signIn
)

module.exports = router;