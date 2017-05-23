import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { SuppliersService } from './suppliers.service';
import {Observable} from "rxjs/Observable";
import {Supplier} from "./supplier.interface";

@Injectable()
export class SupplierResolve implements Resolve<any> {

  constructor(private suppliersService: SuppliersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Supplier> {
    return this.suppliersService.getSupplier(+route.parent.paramMap.get('id') || +route.paramMap.get('id'));
  }
}
