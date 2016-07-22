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

import { MdUniqueSelectionDispatcher } from '@angular2-material/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_RADIO_DIRECTIVES} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

import {
    EventService
} from '../services/event-service';

type Event = {
    eventTitle: string;
    _id: string;
}


@Component({
    selector: 'event-cmp',
    templateUrl: 'event/templates/event.html',
    styleUrls: ['event/styles/event.css'],
    directives: [
        REACTIVE_FORM_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
        MD_TOOLBAR_DIRECTIVES,
        MD_CARD_DIRECTIVES,
        MD_INPUT_DIRECTIVES,
        MD_RADIO_DIRECTIVES,
        MdIcon
    ],
    providers: [EventService, MdIconRegistry, MdUniqueSelectionDispatcher]
})
export class EventCmp implements OnInit {
    title:string = "Events list";
    events:Event[] = [];
    eventForm:FormGroup;
    sessionFlag:boolean = false;
    createEvent:boolean = false;
    times = [];
    statusValue = "";


    constructor(fb:FormBuilder, private _eventService:EventService) {
        this.eventForm = fb.group({
            "eventTitle": ["", Validators.required],
            "eventStart": ["", Validators.required],
            "eventEnd": ["", Validators.required],
            "seats": ["", Validators.required],
            "status": ["", Validators.required],
            "limit": ["", Validators.required],
            "time": [""]
        });
    }

    ngOnInit() {
        this._getAll();
    }

    private _getAll():void {
        this._eventService
            .getAll()
            .subscribe((events) => {
                this.events = events;
            });
    }

    add(message):void {
        this._eventService
            .add(message)
            .subscribe((m) => {
                this.events.push(m);
                (<FormControl>this.eventForm.controls['eventTitle']).updateValue("");
                (<FormControl>this.eventForm.controls['eventStart']).updateValue("");
                (<FormControl>this.eventForm.controls['eventEnd']).updateValue("");
                (<FormControl>this.eventForm.controls['seats']).updateValue("");
                (<FormControl>this.eventForm.controls['time']).updateValue("");
                (<FormControl>this.eventForm.controls['status']).updateValue("");
                this.times = [];
                this.sessionFlag = false;
                this.createEvent = false;
                this.statusValue = "Status";
            });
    }

    addStatus(val) {
        if (!val) {
            return
        }
        this.statusValue = val;
        (<FormControl>this.eventForm.controls['status']).updateValue(this.statusValue);
    }

    addTime(arg) {
        this.times.push(arg);
        (<FormControl>this.eventForm.controls['time']).updateValue(this.times);

    }

    remove(id:string):void {
        this._eventService
            .remove(id)
            .subscribe(() => {
                this.events.forEach((t, i) => {
                    if (t._id === id)
                        return this.events.splice(i, 1);
                });
            })
    }
}
