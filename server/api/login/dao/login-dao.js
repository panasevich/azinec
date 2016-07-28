"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const user = require('../model/login-model');
const _ = require('lodash');
const jwt     = require('jsonwebtoken');

eventSchema.statics.createSession = (session) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(session))
          return reject(new TypeError('Event is not a valid object.'));

      let _event = new Event(session);

      _event.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
}

const Event  = mongoose.model('Login', eventSchema);

module.exports = Login;
