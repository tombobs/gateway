import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'ig-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {
  @Input() rows;

  columns = [
    {heading: 'Order date', key: 'dateCreated', custom: true},
    {heading: 'Order ID', key: 'referenceId', custom: true},
    {heading: 'Customer name', key: 'customerName'},
    {heading: 'Supplier', key: 'supplierName'},
    {heading: 'Type', key: 'typeText'},
    {heading: 'Status', key: 'statusText', custom: true}
  ];
}
