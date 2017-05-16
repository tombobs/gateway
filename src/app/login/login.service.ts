import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {apiUrl} from '../../config/api';

// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

  private apiUrl = apiUrl + 'logon';
  constructor(private http: Http) { }

  login(user: string, password: string) {
    return this.http.post(this.apiUrl, {user, password})
       .map(res => {
         return res.json()
       })
       .catch(err => Observable.throw(err));
  }
}
