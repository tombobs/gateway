import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IMyOptions} from 'mydatepicker';

@Component({
  selector: 'ig-order-advanced-search',
  templateUrl: './order-advanced-search.component.html',
  styleUrls: ['./order-advanced-search.component.scss']
})
export class OrderAdvancedSearchComponent implements OnInit {
  private myDatePickerOptions: IMyOptions = {
    dateFormat: 'dd.mm.yyyy',
    showClearDateBtn: false
  };
  private fromDate: Object = { date: '2000-01-01'};
  private toDate: Object = { date: '2001-01-01'};
  private suppliers: any;
  private supplierId: number;
  @Output() doSearch= new EventEmitter();

  constructor() {
    this.suppliers = [
      {
        label: 'Value 1',
        value: 1
      },
      {
        label: 'Value 2',
        value: 2
      },
      {
        label: 'Value 3',
        value: 3
      }
    ];
  }

  ngOnInit() {
  }

  onSubmit() {
    this.doSearch.emit();
  }
}
