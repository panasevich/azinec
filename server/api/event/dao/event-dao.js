"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const eventSchema = require('../model/event-model');
const _ = require('lodash');

eventSchema.statics.getAll = () => {
    return new Promise((resolve, reject) => {
        let _query = {};

        Event
          .find(_query)
          .exec((err, events) => {
              err ? reject(err)
                  : resolve(events);
          });
      });
}

eventSchema.statics.createEvent = (event) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(event))
          return reject(new TypeError('Event is not a valid object.'));

      let _event = new Event(event);

      _event.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
}

eventSchema.statics.deleteEvent = (id) => {
    return new Promise((resolve, reject) => {
        if (!_.isString(id))
            return reject(new TypeError('Id is not a valid string.'));

        Event
          .findByIdAndRemove(id)
          .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
          });
    });
}

const Event  = mongoose.model('Event', eventSchema);

module.exports = Event;
