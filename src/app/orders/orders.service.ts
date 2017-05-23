import {Inject, Injectable} from '@angular/core';
import { Http, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { APP_CONFIG } from '../app.config';
import {Router} from "@angular/router";



@Injectable()
export class OrdersService {

  private apiUrl;
  constructor(
    @Inject(APP_CONFIG) private config,
    private http: Http,
    private router: Router
  ) {
    this.apiUrl = config.apiUrl + 'orderitem/';
  }

  getOrders(filter): Observable<any> {
    return this.http.get(this.apiUrl + 'list', {search: filter, withCredentials: true})
      .map(res => res.json())
      .catch(err => {
        if (err.status === 401) {
          this.router.navigate(['login']);
        }
        debugger
        return Observable.throw(err);
      });
  }
}
