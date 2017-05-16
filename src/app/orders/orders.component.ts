import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { Page } from '../pagination/page';
declare var require: any;
const paginationConfig = require('../../config/pagination.json');

@Component({
  selector: 'ig-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  private orders;
  private numToDisplayOpts;
  private page: Page;
  private advancedSearch;
  constructor(private orderService: OrdersService) { }

  ngOnInit() {
    this.page = new Page();
    this.numToDisplayOpts = paginationConfig.numToDisplayOptions;
    this.page.pageSize = this.numToDisplayOpts[0].number;
    this.load(this.page);
  }

  pageChanged(page, $event) {
    this.page.pageSize = Number($event.itemsPerPage);
    this.page.pageNumber = $event.page;
    this.load(page);
  }

  doSearch(search) {
    debugger;
    //this.advancedSearch = search || this.advancedSearch;
    this.load(Object.assign({}, this.page, {search}));
  }

  load(query?: {pageSize, pageNumber, search?}) {
    // const {pageSize, pageNumber} = query;
    this.orderService.getOrders(query).subscribe(data => {
      console.log(this.page)
      this.orders = data.results;
      this.page.totalResults = data.totalResults;
    }, err => alert(err));
  }
}
