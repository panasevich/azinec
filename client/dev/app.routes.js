"use strict";
var event_cmp_1 = require('./event/components/event-cmp');
var home_1 = require('./home/components/home');
var singleEvent_1 = require('./singleEvent/components/singleEvent');
var login_1 = require('./login/components/login');
var auth_guard_1 = require('./common/auth.guard');
exports.routes = [
    { path: '', component: home_1.Home },
    { path: 'admin', component: event_cmp_1.EventCmp, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'event/:id', component: singleEvent_1.SingleEvent },
    { path: 'login', component: login_1.Login }
];
