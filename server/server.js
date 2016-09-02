'use strict';

if ('production' === process.env.NODE_ENV)
    require('newrelic');

const PORT = process.env.PORT || 3333;

const os = require('os');
const http = require('http');
const express = require('express');
const RoutesConfig = require('./config/routes.conf');
const DBConfig = require('./config/db.conf');
const Routes = require('./routes/index');
const bodyParser = require('body-parser');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


RoutesConfig.init(app);
DBConfig.init();
Routes.init(app, express.Router());

http.createServer(app)
    .listen(PORT, () => {
      console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
      console.log(`enviroment: ${process.env.NODE_ENV}`);
    });
