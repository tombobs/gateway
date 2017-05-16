import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersComponent } from './suppliers.component';
import { SuppliersListComponent } from './suppliers-list/suppliers-list.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {PaginationHeaderModule} from "../pagination/pagination-header/pagination-header.module";
import {PaginationHeaderComponent} from "../pagination/pagination-header/pagination-header.component";
import {FormsModule} from "@angular/forms";
import {PopoverModule} from "ngx-popover";
import {PaginationFooterModule} from "../pagination/pagination-footer/pagination-footer.module";

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    PopoverModule,
    PaginationHeaderModule,
    PaginationFooterModule
  ],
  declarations: [SuppliersComponent, SuppliersListComponent]
})
export class SuppliersModule { }
