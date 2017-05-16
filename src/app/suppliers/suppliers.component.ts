import { Component, OnInit } from '@angular/core';
import {SuppliersService} from "./suppliers.service";
import {Page} from "../pagination/page";

@Component({
  selector: 'ig-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {

  private suppliers: any;
  private total: number;
  private page: Page;
  constructor(private suppliersService: SuppliersService) { }

  ngOnInit() {
    this.page = new Page();
    this.suppliersService.getSuppliers().subscribe(data => {
      console.log(data)
      this.suppliers = data.results;
      this.total = data.totalResults;
      this.page.totalResults = data.totalResults;
    });
  }

}
