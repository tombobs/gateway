import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {apiUrl} from '../../config/api';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";

@Injectable()
export class SuppliersService  {

  private apiUrl = apiUrl + 'supplier/list';
  constructor(private http: Http) { }

  getSuppliers() {
    return this.http.get(this.apiUrl)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }
}
