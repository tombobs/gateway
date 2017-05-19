import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule} from "@angular/forms";
import {PopoverModule} from 'ngx-popover';
import {MyDatePickerModule} from 'mydatepicker';
import {SelectModule} from 'ng-select';

import {OrdersComponent} from './orders.component';
import {OrderListComponent} from './order-list/order-list.component';
import {OrdersService} from './orders.service';
import {OrderAdvancedSearchComponent} from './order-advanced-search/order-advanced-search.component';
import {SuppliersService} from "../suppliers/suppliers.service";
import {PaginationHeaderModule} from "../components/pagination/pagination-header/pagination-header.module";
import {PaginationFooterModule} from "../components/pagination/pagination-footer/pagination-footer.module";
import {SavedSearchesModule} from "../components/saved-searches/saved-searches.module";

@NgModule({
  declarations: [
    OrdersComponent,
    OrderListComponent,
    OrderAdvancedSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PaginationFooterModule,
    NgxDatatableModule,
    PopoverModule,
    MyDatePickerModule,
    SelectModule,
    PaginationHeaderModule,
    SavedSearchesModule
  ],
  providers: [
    OrdersService,
    SuppliersService
  ]
})
export class OrdersModule {
}
