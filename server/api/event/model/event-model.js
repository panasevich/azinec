"use strict";

const mongoose = require('mongoose');

const eventSchema = {
    eventTitle: {type: String, required: true, trim: true},
    description: {type: String},
    eventStart: {type: Date, required: true},
    eventEnd: {type: Date, required: true},
    createdAt: {type: Date, default: Date.now},
    time: {type: Array},
    status: {type: String},
    limit: {type: Number},
    seats: {type: Number},
    registered: {type: Array}
};

module.exports = mongoose.Schema(eventSchema);
