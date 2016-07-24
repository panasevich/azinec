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
var core_2 = require('@angular2-material/core');
var button_1 = require('@angular2-material/button');
var toolbar_1 = require('@angular2-material/toolbar');
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var radio_1 = require('@angular2-material/radio');
var icon_1 = require('@angular2-material/icon');
var event_service_1 = require('../services/event-service');
var EventCmp = (function () {
    function EventCmp(fb, _eventService) {
        this._eventService = _eventService;
        this.title = "Events list";
        this.events = [];
        this.sessionFlag = false;
        this.createEvent = false;
        this.times = [];
        this.statusValue = "";
        this.eventForm = fb.group({
            "eventTitle": ["", forms_1.Validators.required],
            "description": ["", forms_1.Validators.required],
            "eventStart": ["", forms_1.Validators.required],
            "eventEnd": ["", forms_1.Validators.required],
            "seats": ["", forms_1.Validators.required],
            "status": ["", forms_1.Validators.required],
            "limit": ["", forms_1.Validators.required],
            "time": [""]
        });
    }
    EventCmp.prototype.ngOnInit = function () {
        this._getAll();
    };
    EventCmp.prototype._getAll = function () {
        var _this = this;
        this._eventService
            .getAll()
            .subscribe(function (events) {
            _this.events = events;
        });
    };
    EventCmp.prototype.add = function (message) {
        var _this = this;
        this._eventService
            .add(message)
            .subscribe(function (m) {
            _this.events.push(m);
            _this.eventForm.controls['eventTitle'].updateValue("");
            _this.eventForm.controls['eventStart'].updateValue("");
            _this.eventForm.controls['description'].updateValue("");
            _this.eventForm.controls['eventEnd'].updateValue("");
            _this.eventForm.controls['seats'].updateValue("");
            _this.eventForm.controls['time'].updateValue("");
            _this.eventForm.controls['status'].updateValue("");
            _this.times = [];
            _this.sessionFlag = false;
            _this.createEvent = false;
            _this.statusValue = "Status";
        });
    };
    EventCmp.prototype.addStatus = function (val) {
        if (!val) {
            return;
        }
        this.statusValue = val;
        this.eventForm.controls['status'].updateValue(this.statusValue);
    };
    EventCmp.prototype.addTime = function (arg) {
        this.times.push(arg);
        this.eventForm.controls['time'].updateValue(this.times);
    };
    EventCmp.prototype.remove = function (id) {
        var _this = this;
        this._eventService
            .remove(id)
            .subscribe(function () {
            _this.events.forEach(function (t, i) {
                if (t._id === id)
                    return _this.events.splice(i, 1);
            });
        });
    };
    EventCmp = __decorate([
        core_1.Component({
            selector: 'event-cmp',
            templateUrl: 'event/templates/event.html',
            styleUrls: ['event/styles/event.css'],
            directives: [
                forms_1.REACTIVE_FORM_DIRECTIVES,
                button_1.MD_BUTTON_DIRECTIVES,
                toolbar_1.MD_TOOLBAR_DIRECTIVES,
                card_1.MD_CARD_DIRECTIVES,
                input_1.MD_INPUT_DIRECTIVES,
                radio_1.MD_RADIO_DIRECTIVES,
                icon_1.MdIcon
            ],
            providers: [event_service_1.EventService, icon_1.MdIconRegistry, core_2.MdUniqueSelectionDispatcher]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, event_service_1.EventService])
    ], EventCmp);
    return EventCmp;
}());
exports.EventCmp = EventCmp;
