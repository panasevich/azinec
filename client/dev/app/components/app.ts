import {Component} from '@angular/core';

import {
    Validators,
    FormBuilder,
    REACTIVE_FORM_DIRECTIVES,
    FormGroup,
    FormControl
} from '@angular/forms';

import {Router, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'app',
  template: '<div class="container"><router-outlet></router-outlet></div>',
  directives: [ROUTER_DIRECTIVES]
})

export class App {
  constructor(public router: Router) {}
}