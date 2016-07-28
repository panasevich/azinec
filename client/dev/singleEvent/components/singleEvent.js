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
var event_service_1 = require('../../event/services/event-service');
var button_1 = require('@angular2-material/button');
var toolbar_1 = require('@angular2-material/toolbar');
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var radio_1 = require('@angular2-material/radio');
var icon_1 = require('@angular2-material/icon');
var router_1 = require('@angular/router');
var SingleEvent = (function () {
    function SingleEvent(_eventService, route, fb) {
        this._eventService = _eventService;
        this.route = route;
        this.event = [];
        this.registrationToggle = false;
        this.popup = false;
        this.postUnsuccess = false;
        this.postSuccess = false;
        this.registerForm = fb.group({
            "id": [this.route.params._value.id, forms_1.Validators.required],
            "time": ["", forms_1.Validators.required],
            "name": ["", forms_1.Validators.required],
            "surname": ["", forms_1.Validators.required],
            "email": ["", forms_1.Validators.required],
            "phone": ["", forms_1.Validators.required],
            "company": ["", forms_1.Validators.required]
        });
    }
    SingleEvent.prototype.ngOnInit = function () {
        this._getOne(this.route.params._value.id);
        console.log(this.route.params._value.id);
    };
    SingleEvent.prototype._getOne = function (id) {
        var _this = this;
        this._eventService
            .getOne(id)
            .subscribe(function (events) {
            _this.event = events;
        });
    };
    SingleEvent.prototype.userRegistration = function (data) {
        var _this = this;
        this.id = this.route.params._value.id;
        this._eventService
            .userRegistration(data)
            .subscribe(function (m) {
            console.log(m);
            _this.registerForm.controls['time'].updateValue("");
            _this.registerForm.controls['name'].updateValue("");
            _this.registerForm.controls['surname'].updateValue("");
            _this.registerForm.controls['email'].updateValue("");
            _this.registerForm.controls['phone'].updateValue("");
            _this.registerForm.controls['company'].updateValue("");
            _this.registrationToggle = false;
            _this.postSuccess = true;
        }, function (err) {
            _this.registrationToggle = false;
            _this.postUnsuccess = true;
        });
    };
    SingleEvent.prototype.popupClose = function () {
        this.popup = false;
        this.postSuccess = false;
        this.postUnsuccess = false;
    };
    SingleEvent.prototype.registrationButton = function () {
        this.popup = true;
        this.registrationToggle = true;
    };
    SingleEvent = __decorate([
        core_1.Component({
            selector: 'singleEvent',
            templateUrl: 'singleEvent/templates/singleEvent.html',
            styleUrls: ['singleEvent/styles/singleEvent.css'],
            directives: [
                forms_1.REACTIVE_FORM_DIRECTIVES,
                button_1.MD_BUTTON_DIRECTIVES,
                toolbar_1.MD_TOOLBAR_DIRECTIVES,
                card_1.MD_CARD_DIRECTIVES,
                input_1.MD_INPUT_DIRECTIVES,
                radio_1.MD_RADIO_DIRECTIVES,
                icon_1.MdIcon
            ],
            providers: [event_service_1.EventService, icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService, router_1.ActivatedRoute, forms_1.FormBuilder])
    ], SingleEvent);
    return SingleEvent;
}());
exports.SingleEvent = SingleEvent;
