import {Inject, Injectable} from '@angular/core';
import {Http} from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {APP_CONFIG} from "../app.config";
import {Router} from "@angular/router";
import {Supplier} from "./supplier.interface";
import {IAppConfig, IListResponse} from '../interfaces';

@Injectable()
export class SuppliersService  {

  private apiUrl;
  constructor(
    private http: Http,
    private router: Router,
    @Inject(APP_CONFIG) private config: IAppConfig
  ) {
    this.apiUrl = config.apiUrl + 'supplier';
  }

  getSuppliers(search): Observable<IListResponse<Supplier>> {
    return this.http.get(this.apiUrl + '/list', {search, withCredentials: true})
      .map(res => res.json())
      .catch(err => {
        if (err.status === 401) {
          this.router.navigate(['login']);
        }
        return Observable.throw(err);
      });
  }

  getSupplier(id): Observable<Supplier> {
    const urlParams = new URLSearchParams();
    urlParams['id'] = id;
    return this.http.get(this.apiUrl + '/get', {search: urlParams, withCredentials: true})
      .map(res => res.json())
      .catch(err => {
        return Observable.throw(err);
      });
  }

  updateSupplier(supplier): Observable<Supplier> {
    return this.http.post(this.apiUrl + '/update', supplier, {withCredentials: true})
      .map(res => {
        return res.json();
      })
      .catch(err => Observable.throw(err));
  }
}
