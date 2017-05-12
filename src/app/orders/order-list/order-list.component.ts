import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'ig-order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnChanges {
  @Input() rows;
  @Input() limit = 10;

  ngOnChanges(changes) {
    setTimeout(() => window.dispatchEvent(new Event('resize')));
  }

  setPage(event) {
    console.log(event);
  }
}
