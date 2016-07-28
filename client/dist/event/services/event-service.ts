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


  add(event):Observable<any> {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this._http
               .post(EventService.ENDPOINT.replace(':id', ''), event, {headers})
               .map((r) => r.json());
  }

    register(id, user):Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http
            .post(EventService.ENDPOINT.replace(':id', id), user, {headers})
    }

  remove(id: string):Observable<any> {
    return this._http
               .delete(EventService.ENDPOINT.replace(':id', id));
  }
    userRegistration(user):Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http
            .post(EventService.ENDPOINT.replace(':id', 'register'), user, {headers})
    }
}
