import { Injectable } from '@angular/core';
import {Http, RequestOptionsArgs} from "@angular/http";
import {apiUrl} from '../../config/api';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";

@Injectable()
export class SuppliersService  {

  private apiUrl = apiUrl + 'supplier/list';
  constructor(private http: Http) { }

  getSuppliers(search) {
    console.log(search)
    const urlParams = new URLSearchParams();
    for (let key in search) {
      urlParams[key] = search[key];
    }
    return this.http.get(this.apiUrl, {search: urlParams, withCredentials: true} as RequestOptionsArgs)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }
}
