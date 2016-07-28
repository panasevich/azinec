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
const core_2 = require('@angular2-material/core');
const button_1 = require('@angular2-material/button');
const toolbar_1 = require('@angular2-material/toolbar');
const card_1 = require('@angular2-material/card');
const input_1 = require('@angular2-material/input');
const radio_1 = require('@angular2-material/radio');
const icon_1 = require('@angular2-material/icon');
const event_service_1 = require('../services/event-service');
let EventCmp = class EventCmp {
    constructor(fb, _eventService) {
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
    add(message) {
        this._eventService
            .add(message)
            .subscribe((m) => {
            this.events.push(m);
            this.eventForm.controls['eventTitle'].updateValue("");
            this.eventForm.controls['eventStart'].updateValue("");
            this.eventForm.controls['description'].updateValue("");
            this.eventForm.controls['eventEnd'].updateValue("");
            this.eventForm.controls['seats'].updateValue("");
            this.eventForm.controls['time'].updateValue("");
            this.eventForm.controls['status'].updateValue("");
            this.times = [];
            this.sessionFlag = false;
            this.createEvent = false;
            this.statusValue = "Status";
        });
    }
    addStatus(val) {
        if (!val) {
            return;
        }
        this.statusValue = val;
        this.eventForm.controls['status'].updateValue(this.statusValue);
    }
    addTime(arg) {
        this.times.push(arg);
        this.eventForm.controls['time'].updateValue(this.times);
    }
    remove(id) {
        this._eventService
            .remove(id)
            .subscribe(() => {
            this.events.forEach((t, i) => {
                if (t._id === id)
                    return this.events.splice(i, 1);
            });
        });
    }
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
exports.EventCmp = EventCmp;
