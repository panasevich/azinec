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
const router_1 = require('@angular/router');
const event_service_1 = require('../../event/services/event-service');
const button_1 = require('@angular2-material/button');
const toolbar_1 = require('@angular2-material/toolbar');
const card_1 = require('@angular2-material/card');
const input_1 = require('@angular2-material/input');
const radio_1 = require('@angular2-material/radio');
const icon_1 = require('@angular2-material/icon');
let Home = class Home {
    constructor(_eventService, router) {
        this._eventService = _eventService;
        this.router = router;
        this.title = "Events list";
        this.events = [];
    }
    ngOnInit() {
        this._getAll();
    }
    _getAll() {
        this._eventService
            .getAll()
            .subscribe((events) => {
            this.events = events;
        });
    }
    goToEvent(event) {
        let link = ['/event', event._id];
        this.router.navigate(link);
    }
};
Home = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: 'home/templates/home.html',
        styleUrls: ['home/styles/home.css'],
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
    __metadata('design:paramtypes', [event_service_1.EventService, router_1.Router])
], Home);
exports.Home = Home;
