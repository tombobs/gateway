import { Component, OnInit } from '@angular/core';
import {SuppliersService} from "../suppliers.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ig-suppliers-detail',
  templateUrl: './suppliers-detail.component.html',
  styleUrls: ['./suppliers-detail.component.scss']
})
export class SuppliersDetailComponent implements OnInit {

  sections = [
    {
      label: 'Overview',
      route: 'overview'
    },
    {
      label: 'Map',
      route: 'map'
    }
  ];
  supplierId: number;
  supplier: any;
  constructor(
    private supplierService: SuppliersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const supplierId = +params['id'];
      this.getSupplier(supplierId);
    });
  }

  getSupplier(id) {
    this.supplierService.getSupplier(id).subscribe(supplier => {
      this.supplier = supplier;
    });
  }
}
