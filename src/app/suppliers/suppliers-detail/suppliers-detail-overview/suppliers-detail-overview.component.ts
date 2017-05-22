import { Component, OnInit } from '@angular/core';
import {SuppliersService} from "../../suppliers.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ig-suppliers-detail-overview',
  templateUrl: './suppliers-detail-overview.component.html',
  styleUrls: ['./suppliers-detail-overview.component.scss']
})
export class SuppliersDetailOverviewComponent implements OnInit {

  private supplier: any;
  constructor(
    private supplierService: SuppliersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.supplierService.supplier) {
      this.supplier = this.supplierService.supplier;
    }
    // else {
    //   this.supplierService.getSupplier()
    // }
  }

  updateSupplier() {
    debugger;
    return this.supplierService.updateSupplier(this.supplier);
  }

}
