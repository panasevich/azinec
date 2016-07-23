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


export const routes: RouterConfig = [
    { path: '', component:  Home },
    { path: 'admin', component:  EventCmp },
    { path: 'event/:id', component: SingleEvent }
];
