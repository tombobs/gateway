import { Component, OnInit } from '@angular/core';
import {SuppliersService} from "../../suppliers.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ig-suppliers-detail-overview',
  templateUrl: './suppliers-detail-overview.component.html',
  styleUrls: ['./suppliers-detail-overview.component.scss']
})
export class SuppliersDetailOverviewComponent implements OnInit {

  supplier;
  constructor(
    private supplierService: SuppliersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.supplier = this.route.snapshot.data['supplier'].supplier;
  }

  updateSupplier() {
    return this.supplierService.updateSupplier(this.supplier).subscribe(res => {
      console.log(res)
    });
  }

}
