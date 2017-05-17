import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdersComponent} from './orders.component';
import {OrderListComponent} from './order-list/order-list.component';
import {OrdersService} from './orders.service';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule} from "@angular/forms";
import {PopoverModule} from 'ngx-popover';
import {PagerComponent} from '../pagination/pager/pager.component';

// import { PagerComponent } from '../pagination/pagination.component';
import {NgxPaginationModule, PaginationControlsComponent} from 'ngx-pagination';
import {OrderAdvancedSearchComponent} from './order-advanced-search/order-advanced-search.component';
import {MyDatePickerModule} from 'mydatepicker';
import {SelectModule} from 'ng-select';
import {SuppliersService} from "../suppliers/suppliers.service";
import {NguiAutoCompleteModule} from "@ngui/auto-complete";
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
    PaginationHeaderModule,
  ],
  providers: [
    OrdersService,
    SuppliersService
  ]
})
export class OrdersModule {
}
