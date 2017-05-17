import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IMyOptions} from 'mydatepicker';
import {SuppliersService} from "../../suppliers/suppliers.service";
//import {CompleterData, CompleterService} from 'ng2-completer';
import {apiUrl} from '../../../config/api';
import * as moment from 'moment';

@Component({
  selector: 'ig-order-advanced-search',
  templateUrl: './order-advanced-search.component.html',
  styleUrls: ['./order-advanced-search.component.scss']
})
export class OrderAdvancedSearchComponent implements OnInit {
  private myDatePickerOptions: IMyOptions = {
    dateFormat: 'dd/mm/yyyy',
    showClearDateBtn: false,
    selectionTxtFontSize: '11px',
    editableDateField: false
  };
  private supplierSearchUrl;

  private fromDate;
  private toDate;
  private suppliers: any;
  private supplierId: number;
  private orderItemId: string;
  private supplierName: string;

  @Output() submit: EventEmitter<any> = new EventEmitter();

  constructor(private suppliersService: SuppliersService) {
    // this.suppliers = [
    //   {
    //     label: 'Value 1',
    //     value: 1
    //   },
    //   {
    //     label: 'Value 2',
    //     value: 2
    //   },
    //   {
    //     label: 'Value 3',
    //     value: 3
    //   }
    // ];
    //this.supplierSearchUrl = apiUrl + 'supplier/lookup?Name=';
    //this.dataService = this.completerService.remote(this.supplierSearchUrl, 'supplierName', 'supplierName');
  }

  ngOnInit() {
    this.suppliersService.getSuppliers({}).subscribe(data => {
      console.log(data);
    });
  }

  onSubmit() {
    const search = {
      fromDate: this.fromDate && this.fromDate.jsdate.toISOString(),
      toDate: this.toDate && this.toDate.jsdate.toISOString(),
      supplierId: this.supplierId,
      orderItemId: this.orderItemId
    };
    this.submit.emit(search);
  }
}
