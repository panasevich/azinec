"use strict";

const EventController = require('../controller/event-controller');

module.exports = class EventRoutes {
    static init(router) {
      router
        .route('/api/events')
        .get(EventController.getAll)
        .post(EventController.createEvent);

      router
        .route('/api/events/:id')
        .delete(EventController.deleteEvent);
    }
}
