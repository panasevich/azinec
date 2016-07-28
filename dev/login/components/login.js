"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const forms_1 = require('@angular/forms');
const login_service_1 = require('../services/login-service');
const button_1 = require('@angular2-material/button');
const toolbar_1 = require('@angular2-material/toolbar');
const card_1 = require('@angular2-material/card');
const input_1 = require('@angular2-material/input');
const radio_1 = require('@angular2-material/radio');
const icon_1 = require('@angular2-material/icon');
const router_1 = require('@angular/router');
let Login = class Login {
    constructor(_loginService, route, router, fb) {
        this._loginService = _loginService;
        this.route = route;
        this.router = router;
        this.event = [];
        this.registrationToggle = false;
        this.loginForm = fb.group({
            "username": ["", forms_1.Validators.required],
            "password": ["", forms_1.Validators.required]
        });
    }
    login(data) {
        this._loginService
            .login(data)
            .subscribe((m) => {
            console.log(m.json().id_token);
            localStorage.setItem('id_token', m.json().id_token);
            this.router.navigate(['/admin']);
            this.loginForm.controls['username'].updateValue("");
            this.loginForm.controls['password'].updateValue("");
        });
    }
};
Login = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: 'login/templates/login.html',
        styleUrls: ['login/styles/login.css'],
        directives: [
            forms_1.REACTIVE_FORM_DIRECTIVES,
            button_1.MD_BUTTON_DIRECTIVES,
            toolbar_1.MD_TOOLBAR_DIRECTIVES,
            card_1.MD_CARD_DIRECTIVES,
            input_1.MD_INPUT_DIRECTIVES,
            radio_1.MD_RADIO_DIRECTIVES,
            icon_1.MdIcon
        ],
        providers: [login_service_1.LoginService, icon_1.MdIconRegistry]
    }), 
    __metadata('design:paramtypes', [login_service_1.LoginService, router_1.ActivatedRoute, router_1.Router, forms_1.FormBuilder])
], Login);
exports.Login = Login;
