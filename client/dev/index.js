//import {disableDeprecatedForms, provideForms} from '@angular/forms';
//import {bootstrap} from '@angular/platform-browser-dynamic';
//import {HTTP_PROVIDERS} from '@angular/http';
//
//import { FORM_PROVIDERS } from '@angular/common';
//
//import {EventCmp} from './event/components/event-cmp';
//
//bootstrap(EventCmp, [
//  HTTP_PROVIDERS,
//  disableDeprecatedForms(),
//  provideForms()
//]);
"use strict";
var forms_1 = require('@angular/forms');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
var auth_guard_1 = require('./common/auth.guard');
var app_1 = require('./app/components/app');
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(app_1.App, [
    router_1.provideRouter(app_routes_1.routes),
    common_1.FORM_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    angular2_jwt_1.AUTH_PROVIDERS,
    auth_guard_1.AuthGuard
]);
