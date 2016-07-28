"use strict";

const EventDAO = require('../dao/event-dao');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport('smtps://auto.application12%40gmail.com:12auto.application12@smtp.gmail.com');

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

    static userRegistration(req, res) {
        let _id = req.params.id;
        EventDAO
            .userRegistration(_id, req.body)
            .then(() => res.status(200).end())
            .catch(error => res.status(400).json(error));
    }

    static deleteEvent(req, res) {
        let _id = req.params.id;

        EventDAO
            .deleteEvent(_id)
            .then(() => res.status(200).end())
            .catch(error => res.status(400).json(error));
    }

    static userRegistration(req, res) {
        let mail = req.body.email;
        console.log(req.body);
        let message = {
            from: '<auto.application12@gmail.com>',
            to: mail,
            subject: 'Azinec registration',
            text: 'Azinec registration',
            html: 'Azinec'
        };

        EventDAO
            .userRegistration(req.body.id);

        transporter.sendMail(message, function(error){
            if (error) {
                res.status(401).send({
                    success: false
                });
                return;
            }
            res.status(201).send({
                success: true
            })
        })
    }
};
