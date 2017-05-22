import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { Page } from '../components/pagination/page';

class OrderAdvancedSearch {

}

@Component({
  selector: 'ig-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  private orders;
  private page: Page;
  private advancedSearch: any;
  visible = false;
  constructor(private orderService: OrdersService) { }

  ngOnInit() {
    this.page = new Page();
    this.load();
  }

  onPageChange(page) {
    page.pageSize = Number(page.pageSize);
    this.page = page;
    this.load();
  }

  onSearchChange(search) {
    this.advancedSearch = search;
    debugger;
    this.visible = false;
    this.load();
  }

  private load() {
    const orderSearch = Object.assign({}, this.page, this.advancedSearch);
    this.orderService.getOrders(orderSearch).subscribe(data => {
      this.orders = data.results;
      this.page.totalResults = data.totalResults;
    }, err => alert(err));
  }
}
