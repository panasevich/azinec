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
    EventService
} from '../../event/services/event-service';

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
    selector: 'singleEvent',
    templateUrl: 'singleEvent/templates/singleEvent.html',
    styleUrls: ['singleEvent/styles/singleEvent.css'],
    directives: [
        REACTIVE_FORM_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
        MD_TOOLBAR_DIRECTIVES,
        MD_CARD_DIRECTIVES,
        MD_INPUT_DIRECTIVES,
        MD_RADIO_DIRECTIVES,
        MdIcon
    ],
    providers: [EventService, MdIconRegistry]
})
export class SingleEvent implements OnInit {
    event:Event[] = [];
    registrationToggle:Boolean = false;
    popup:boolean = false;
    id:string;
    registerForm:FormGroup;
    postUnsuccess:boolean = false;
    postSuccess:boolean = false;

    constructor(private _eventService:EventService,
                private route:ActivatedRoute,
                fb:FormBuilder) {
        this.registerForm = fb.group({
            "id": [this.route.params._value.id, Validators.required],
            "time": ["", Validators.required],
            "name": ["", Validators.required],
            "surname": ["", Validators.required],
            "email": ["", Validators.required],
            "phone": ["", Validators.required],
            "company": ["", Validators.required]
        });
    }

    ngOnInit() {
        this._getOne(this.route.params._value.id);
        console.log(this.route.params._value.id);
    }

    private _getOne(id):void {
        this._eventService
            .getOne(id)
            .subscribe((events) => {
                this.event = events;
            });
    }

    userRegistration(data):void {
        this.id = this.route.params._value.id;
        this._eventService
            .userRegistration(data)
            .subscribe((m) => {
                console.log(m);
                (<FormControl>this.registerForm.controls['time']).updateValue("");
                (<FormControl>this.registerForm.controls['name']).updateValue("");
                (<FormControl>this.registerForm.controls['surname']).updateValue("");
                (<FormControl>this.registerForm.controls['email']).updateValue("");
                (<FormControl>this.registerForm.controls['phone']).updateValue("");
                (<FormControl>this.registerForm.controls['company']).updateValue("");
                this.registrationToggle = false;
                this.postSuccess = true;
            },
                err => {
                    this.registrationToggle = false;
                    this.postUnsuccess = true;
            }
        );

    }

    popupClose(){
        this.popup = false;
        this.postSuccess = false;
        this.postUnsuccess = false;
    }

    registrationButton() {
        this.popup = true;
        this.registrationToggle = true;
    }

}
