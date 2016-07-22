import {
  Component,
  Inject
} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'home/templates/home.html',
  styleUrls: ['home/styles/home.css']
})
export class Home {
  name: string = `yo, I'm your component :D`;
}
