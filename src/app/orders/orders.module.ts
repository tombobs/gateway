import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrdersService } from './orders.service';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule} from "@angular/forms";
import {PopoverModule} from 'ngx-popover';
import {PaginationComponent} from '../pagination/pagination.component';

// import { PaginationComponent } from '../pagination/pagination.component';
import {NgxPaginationModule, PaginationControlsComponent} from 'ngx-pagination';
import { OrderAdvancedSearchComponent } from './order-advanced-search/order-advanced-search.component';
import { MyDatePickerModule } from 'mydatepicker';
import {SelectModule} from 'ng-select';

@NgModule({
  declarations: [OrdersComponent, OrderListComponent, PaginationComponent, OrderAdvancedSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    PopoverModule,
    MyDatePickerModule,
    SelectModule
    // NgxPaginationModule
  ],
  providers: [OrdersService]
})
export class OrdersModule { }
