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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var login_service_1 = require('../services/login-service');
var button_1 = require('@angular2-material/button');
var toolbar_1 = require('@angular2-material/toolbar');
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var radio_1 = require('@angular2-material/radio');
var icon_1 = require('@angular2-material/icon');
var router_1 = require('@angular/router');
var Login = (function () {
    function Login(_loginService, route, router, fb) {
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
    Login.prototype.login = function (data) {
        var _this = this;
        this._loginService
            .login(data)
            .subscribe(function (m) {
            console.log(m.json().id_token);
            localStorage.setItem('id_token', m.json().id_token);
            _this.router.navigate(['/admin']);
            _this.loginForm.controls['username'].updateValue("");
            _this.loginForm.controls['password'].updateValue("");
        });
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
    return Login;
}());
exports.Login = Login;
