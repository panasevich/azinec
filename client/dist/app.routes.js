"use strict";
var event_cmp_1 = require('./event/components/event-cmp');
var home_1 = require('./home/components/home');
var singleEvent_1 = require('./singleEvent/components/singleEvent');
exports.routes = [
    { path: '', component: home_1.Home },
    { path: 'admin', component: event_cmp_1.EventCmp },
    { path: 'event/:id', component: singleEvent_1.SingleEvent }
];
