import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdersComponent} from './orders.component';
import {OrderListComponent} from './order-list/order-list.component';
import {OrdersService} from './orders.service';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule} from "@angular/forms";
import {PopoverModule} from 'ngx-popover';
import {PaginationComponent} from '../pagination/pager/pagination.component';

// import { PaginationComponent } from '../pagination/pagination.component';
import {NgxPaginationModule, PaginationControlsComponent} from 'ngx-pagination';
import {OrderAdvancedSearchComponent} from './order-advanced-search/order-advanced-search.component';
import {MyDatePickerModule} from 'mydatepicker';
import {SelectModule} from 'ng-select';
import {SuppliersService} from "../suppliers/suppliers.service";
import {NguiAutoCompleteModule} from "@ngui/auto-complete";
import {CompleterService, LocalData, Ng2CompleterModule, RemoteData} from "ng2-completer";
import {PaginationHeaderModule} from "../pagination/pagination-header/pagination-header.module";
import {PaginationFooterModule} from "../pagination/pagination-footer/pagination-footer.module";

@NgModule({
  declarations: [
    OrdersComponent,
    OrderListComponent,
    OrderAdvancedSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PaginationFooterModule,
    NgxDatatableModule,
    PopoverModule,
    MyDatePickerModule,
    SelectModule,
    Ng2CompleterModule,
    PaginationHeaderModule,
  ],
  providers: [
    OrdersService,
    SuppliersService,
    CompleterService,
    // LocalData,
    // RemoteData
  ]
})
export class OrdersModule {
}
