import {Inject, Injectable} from '@angular/core';
import {Http} from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {APP_CONFIG, IAppConfig} from "../app.config";
import {Router} from "@angular/router";

@Injectable()
export class SuppliersService  {

  supplier;
  private apiUrl;
  constructor(
    private http: Http,
    private router: Router,
    @Inject(APP_CONFIG) private config: IAppConfig
  ) {
    this.apiUrl = config.apiUrl + 'supplier';
  }

  getSuppliers(search) {
    const urlParams = new URLSearchParams();
    for (let key in search) {
      urlParams[key] = search[key];
    }
    return this.http.get(this.apiUrl + '/list', {search: urlParams, withCredentials: true})
      .map(res => res.json())
      .catch(err => {
        if (err.status === 401) {
          this.router.navigate(['login']);
        }
        return Observable.throw(err);
      });
  }

  getSupplier(id) {
    const urlParams = new URLSearchParams();
    urlParams['id'] = id;
    return this.http.get(this.apiUrl + '/get', {search: urlParams, withCredentials: true})
      .map(res => {
        this.supplier = res.json();
        return this.supplier;
      })
      .catch(err => {

        return Observable.throw(err);
      });
  }

  updateSupplier(supplier) {
    return this.http.post(this.apiUrl + '/update', supplier, {withCredentials: true})
      .map(res => {
        return res.json();
      })
      .catch(err => Observable.throw(err));
  }
}
