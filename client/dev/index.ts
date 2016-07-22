import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import { provideRouter } from '@angular/router';
import { FORM_PROVIDERS } from '@angular/common';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './common/auth.guard';

import { App } from './app';
import { routes } from './app.routes';

import {EventCmp} from './event/components/event-cmp';

bootstrap(EventCmp, [
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms()
]);
