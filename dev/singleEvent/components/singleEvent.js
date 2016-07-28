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
const event_service_1 = require('../../event/services/event-service');
const button_1 = require('@angular2-material/button');
const toolbar_1 = require('@angular2-material/toolbar');
const card_1 = require('@angular2-material/card');
const input_1 = require('@angular2-material/input');
const radio_1 = require('@angular2-material/radio');
const icon_1 = require('@angular2-material/icon');
const router_1 = require('@angular/router');
let SingleEvent = class SingleEvent {
    constructor(_eventService, route, fb) {
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
    ngOnInit() {
        this._getOne(this.route.params._value.id);
        console.log(this.route.params._value.id);
    }
    _getOne(id) {
        this._eventService
            .getOne(id)
            .subscribe((events) => {
            this.event = events;
        });
    }
    userRegistration(data) {
        this.id = this.route.params._value.id;
        this._eventService
            .userRegistration(data)
            .subscribe((m) => {
            console.log(m);
            this.registerForm.controls['time'].updateValue("");
            this.registerForm.controls['name'].updateValue("");
            this.registerForm.controls['surname'].updateValue("");
            this.registerForm.controls['email'].updateValue("");
            this.registerForm.controls['phone'].updateValue("");
            this.registerForm.controls['company'].updateValue("");
            this.registrationToggle = false;
            this.postSuccess = true;
        }, err => {
            this.registrationToggle = false;
            this.postUnsuccess = true;
        });
    }
    popupClose() {
        this.popup = false;
        this.postSuccess = false;
        this.postUnsuccess = false;
    }
    registrationButton() {
        this.popup = true;
        this.registrationToggle = true;
    }
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
exports.SingleEvent = SingleEvent;
