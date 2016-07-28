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

import {disableDeprecatedForms, provideForms} from '@angular/forms';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { FORM_PROVIDERS } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './common/auth.guard';


import { App } from './app/components/app';
import { routes } from './app.routes';

bootstrap(
    App,
    [
      provideRouter(routes),
      FORM_PROVIDERS,
      HTTP_PROVIDERS,
      disableDeprecatedForms(),
      provideForms(),
      AUTH_PROVIDERS,
      AuthGuard
    ]
);
