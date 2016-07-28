"use strict";

//const LoginDAO = require('../dao/login-dao');
const User = require('../model/login-model');
const config = require('../config');
const _ = require("lodash");
const jwt = require("jsonwebtoken");

module.exports = class LoginController {
    static createSession(req, res) {
        console.log(req.body);
        if (!req.body.username || !req.body.password) {
            return res.status(400).send("You must send the username and the password");
        }

        var user = _.find(User, {username: req.body.username});
        if (!user) {
            return res.status(401).send("The username or password don't match");
        }

        if (!(user.password === req.body.password)) {
            return res.status(401).send("The username or password don't match");
        }
        res.status(201).send({
            id_token: jwt.sign(_.omit(user, 'password'), config.secret)
        });

    }

};
