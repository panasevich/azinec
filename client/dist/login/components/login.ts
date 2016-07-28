import {
    Component,
    Inject,
    OnInit
} from '@angular/core';

import {
    Validators,
    FormBuilder,
    REACTIVE_FORM_DIRECTIVES,
    FormGroup,
    FormControl
} from '@angular/forms';

import {
    LoginService
} from '../services/login-service';

import { MdUniqueSelectionDispatcher } from '@angular2-material/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_RADIO_DIRECTIVES} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

import {Router, ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';

type Event = {
    eventTitle: string;
    _id: string;
}

@Component({
    selector: 'login',
    templateUrl: 'login/templates/login.html',
    styleUrls: ['login/styles/login.css'],
    directives: [
        REACTIVE_FORM_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
        MD_TOOLBAR_DIRECTIVES,
        MD_CARD_DIRECTIVES,
        MD_INPUT_DIRECTIVES,
        MD_RADIO_DIRECTIVES,
        MdIcon
    ],
    providers: [LoginService, MdIconRegistry]
})
export class Login {
    event:Event[] = [];
    registrationToggle:Boolean = false;
    loginForm:FormGroup;

    constructor(private _loginService:LoginService,
                private route:ActivatedRoute,
                public router: Router,
                fb:FormBuilder) {
        this.loginForm = fb.group({
            "username": ["", Validators.required],
            "password": ["", Validators.required]
        });
    }

    login(data):void {
        this._loginService
            .login(data)
            .subscribe((m) => {
                console.log(m.json().id_token);
                localStorage.setItem('id_token', m.json().id_token);
                this.router.navigate(['/admin']);
                (<FormControl>this.loginForm.controls['username']).updateValue("");
                (<FormControl>this.loginForm.controls['password']).updateValue("");
            });
    }

}
