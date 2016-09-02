import { RouterConfig } from '@angular/router';
import {
    Validators,
    FormBuilder,
    REACTIVE_FORM_DIRECTIVES,
    FormGroup,
    FormControl
} from '@angular/forms';

import { EventCmp } from './event/components/event-cmp';
import { Home } from './home/components/home';
import { SingleEvent } from './singleEvent/components/singleEvent';
import { Login } from './login/components/login';
import { AuthGuard } from './common/auth.guard';


export const routes: RouterConfig = [
    { path: '', component:  Home },
    { path: 'admin', component:  EventCmp,  canActivate: [AuthGuard] },
    { path: 'event/:id', component: SingleEvent },
    { path: 'login', component: Login }
];
