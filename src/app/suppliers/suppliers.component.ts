import { Component, OnInit } from '@angular/core';
import {SuppliersService} from "./suppliers.service";
import {Page} from "../components/pagination/page";

@Component({
  selector: 'ig-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {

  private suppliers: any;
  private page: Page;
  constructor(private suppliersService: SuppliersService) { }

  columns = [
    {heading: 'Supplier name', key: 'name', link: ''},
    {heading: 'Status', key: 'status'},
    {heading: 'Type', key: 'type'},
    {heading: 'Region', key: 'region'},
    {heading: 'Phone number', key: 'phoneNumber'},
    {heading: 'Primary user', key: 'primaryUser'}
  ]

  ngOnInit() {
    this.page = new Page();
    this.load();
  }

  onPageChange(page) {
    this.page = page;
    this.load();
  }

  private load() {
    this.suppliersService.getSuppliers(this.page).subscribe(data => {
      this.suppliers = data.results;
      this.page.totalResults = data.totalResults;
    });
  }
}
