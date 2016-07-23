import {Component} from '@angular/core';

import {
    Validators,
    FormBuilder,
    REACTIVE_FORM_DIRECTIVES,
    FormGroup,
    FormControl
} from '@angular/forms';

import { MdUniqueSelectionDispatcher } from '@angular2-material/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

import {Router, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: 'app/templates/app.html',
    styleUrls: ['app/styles/app.css'],
    directives: [
        ROUTER_DIRECTIVES,
        MD_TOOLBAR_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
        MD_SIDENAV_DIRECTIVES,
        MD_LIST_DIRECTIVES,
        MdIcon
    ],
    providers: [MdIconRegistry]
})

export class App {
    constructor(public router:Router) {
    }
}