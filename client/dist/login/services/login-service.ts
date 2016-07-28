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
export class LoginService {
  static ENDPOINT: string = '/api/login';

  constructor(@Inject(Http) private _http: Http) {

  }


    login(user):Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http
            .post(LoginService.ENDPOINT, user, {headers})
    }


}
