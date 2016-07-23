"use strict";

const EventDAO = require('../dao/event-dao');

module.exports = class EventController {
  static getAll(req, res) {
      EventDAO
        .getAll()
        .then(events => res.status(200).json(events))
        .catch(error => res.status(400).json(error));
  }

  static getOne(req, res) {
    let _id = req.params.id;

    EventDAO
        .getOne(_id)
        .then(event => res.status(200).json(event))
        .catch(error => res.status(400).json(error));
  }

  static createEvent(req, res) {
      let _event = req.body;

      EventDAO
        .createEvent(_event)
        .then(event => res.status(201).json(event))
        .catch(error => res.status(400).json(error));
  }

  static deleteEvent(req, res) {
    let _id = req.params.id;

    EventDAO
      .deleteEvent(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
};
