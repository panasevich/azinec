import {
  Inject,
  Injectable
} from '@angular/core';

import {
  Observable
} from 'rxjs/Observable';

import {
  Http,
  Headers
} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class EventService {
  static ENDPOINT: string = '/api/events/:id';

  constructor(@Inject(Http) private _http: Http) {

  }

  getAll():Observable<any> {
    return this._http
               .get(EventService.ENDPOINT.replace(':id', ''))
               .map((r) => r.json());
  }
    getOne(id: string):Observable<any> {
        return this._http
            .get(EventService.ENDPOINT.replace(':id', id))
            .map((r) => r.json());
    }


  add(message):Observable<any> {
    let _messageStringified = message;
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this._http
               .post(EventService.ENDPOINT.replace(':id', ''), _messageStringified, {headers})
               .map((r) => r.json());
  }

  remove(id: string):Observable<any> {
    return this._http
               .delete(EventService.ENDPOINT.replace(':id', id));
  }
}
