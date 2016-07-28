"use strict";

const EventController = require('../controller/event-controller');
const LoginController = require('../../login/controller/login-controller');

module.exports = class EventRoutes {
    static init(router) {
        router
            .route('/api/events')
            .get(EventController.getAll)
            .post(EventController.createEvent);

        router
            .route('/api/events/:id')
            .get(EventController.getOne)
            .delete(EventController.deleteEvent)
            .post(EventController.userRegistration);

        router
            .route('/api/event/register')
            .post(EventController.userRegistration);

        router
            .route('/api/login')
            .post(LoginController.createSession);
    }
}
