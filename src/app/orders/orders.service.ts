import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {apiUrl} from '../../config/api';

export interface OrderSearch {
  pageNumber?: Number;
  pageSize?: Number;
  search?: any;
}

@Injectable()
export class OrdersService {

  private apiUrl = apiUrl + 'orderitem/list';

  constructor(private http: Http) { }

  getOrders(filter: OrderSearch): Observable<any> {
    debugger
    const params = new URLSearchParams();
    for (const key in filter) {
      if (typeof filter[key] !== 'object') {
        params.set(key, filter[key]);
      }
    }
    for (const key in filter.search) {
      if (filter.search[key]) {
        params.set(key, filter.search[key]);
      }
    }

    return this.http.get(this.apiUrl + '?' + params.toString())
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }
}
