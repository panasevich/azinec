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
const forms_1 = require('@angular/forms');
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const router_1 = require('@angular/router');
const common_1 = require('@angular/common');
const http_1 = require('@angular/http');
const angular2_jwt_1 = require('angular2-jwt');
const auth_guard_1 = require('./common/auth.guard');
const app_1 = require('./app/components/app');
const app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(app_1.App, [
    router_1.provideRouter(app_routes_1.routes),
    common_1.FORM_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    angular2_jwt_1.AUTH_PROVIDERS,
    auth_guard_1.AuthGuard
]);
