import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { SuppliersService } from './suppliers.service';

@Injectable()
export class SupplierResolve implements Resolve<any> {

  constructor(private suppliersService: SuppliersService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.suppliersService.getSupplier(+route.parent.paramMap.get('id') || +route.paramMap.get('id'));
  }
}
