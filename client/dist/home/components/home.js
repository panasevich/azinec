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
var router_1 = require('@angular/router');
var event_service_1 = require('../../event/services/event-service');
var button_1 = require('@angular2-material/button');
var toolbar_1 = require('@angular2-material/toolbar');
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var radio_1 = require('@angular2-material/radio');
var icon_1 = require('@angular2-material/icon');
var Home = (function () {
    function Home(_eventService, router) {
        this._eventService = _eventService;
        this.router = router;
        this.title = "Events list";
        this.events = [];
    }
    Home.prototype.ngOnInit = function () {
        this._getAll();
    };
    Home.prototype._getAll = function () {
        var _this = this;
        this._eventService
            .getAll()
            .subscribe(function (events) {
            _this.events = events;
        });
    };
    Home.prototype.goToEvent = function (event) {
        var link = ['/event', event._id];
        this.router.navigate(link);
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
    return Home;
}());
exports.Home = Home;
