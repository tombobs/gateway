import {Inject, Injectable} from '@angular/core';
import {Http} from '@angular/http';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import {APP_CONFIG, IAppConfig} from "../app.config";

@Injectable()
export class LoginService {

  private apiUrl;
  constructor(
    private http: Http,
    @Inject(APP_CONFIG) private config: IAppConfig
  ) {
    this.apiUrl = config.apiUrl;
  }

  login(user: string, password: string) {
    return this.http.post(this.apiUrl + 'logon', {user, password}, {withCredentials: true})
       .map(res => res)
       .catch(err => Observable.throw(err));
  }

  logout() {
    return this.http.post(this.apiUrl + 'logoff', {}, {withCredentials: true});
  }
}
