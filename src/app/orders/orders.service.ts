import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {apiUrl} from '../../config/api';


@Injectable()
export class OrdersService {

  private apiUrl = apiUrl + 'orderitem/list';

  constructor(private http: Http) { }

  getOrders(filter): Observable<any> {
    return this.http.get(this.apiUrl, {search: filter} as RequestOptionsArgs)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }
}
