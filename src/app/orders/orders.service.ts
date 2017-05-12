import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const useMocks = false;
export interface OrderSearch {
  pageNumber?: Number;
  pageSize?: Number;
}

@Injectable()
export class OrdersService {

  private apiUrl = useMocks ? 'http://localhost:8080/' : 'http://ukwy13434:81/';
  constructor(private http: Http) { }

  getOrders(filter: OrderSearch): Observable<any> {
    return this.http.post(this.apiUrl + 'order/list', filter)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }
}
