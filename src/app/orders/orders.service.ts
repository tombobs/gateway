import {Inject, Injectable} from '@angular/core';
import { Http, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { APP_CONFIG } from '../app.config';



@Injectable()
export class OrdersService {

  private apiUrl;
  constructor(
    @Inject(APP_CONFIG) private config,
    private http: Http
  ) {
    this.apiUrl = config.apiUrl + 'orderitem/';
  }

  getOrders(filter): Observable<any> {
    return this.http.get(this.apiUrl + 'list', {search: filter, withCredentials: true})
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }
}
