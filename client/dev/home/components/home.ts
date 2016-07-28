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

import {Router, ROUTER_DIRECTIVES} from '@angular/router';

import {
    EventService
} from '../../event/services/event-service';

type Event = {
    eventTitle: string;
    _id: string;
}

import { MdUniqueSelectionDispatcher } from '@angular2-material/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_RADIO_DIRECTIVES} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
    selector: 'home',
    templateUrl: 'home/templates/home.html',
    styleUrls: ['home/styles/home.css'],
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
export class Home implements OnInit {
    title:string = "Events list";
    events:Event[] = [];

    constructor(private _eventService:EventService, private router: Router) {

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
    goToEvent(event){
        let link = ['/event', event._id];
        this.router.navigate(link);
    }
}
