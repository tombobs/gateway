import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersComponent } from './suppliers.component';
import { SuppliersListComponent } from './suppliers-list/suppliers-list.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {PaginationHeaderModule} from "../components/pagination/pagination-header/pagination-header.module";
import {PaginationHeaderComponent} from "../components/pagination/pagination-header/pagination-header.component";
import {FormsModule} from "@angular/forms";
import {PopoverModule} from "ngx-popover";
import {PaginationFooterModule} from "../components/pagination/pagination-footer/pagination-footer.module";
import { SuppliersDetailComponent } from './suppliers-detail/suppliers-detail.component';
import {TableModule} from "../components/table/table.module";
import {SavedSearchesComponent} from "../components/saved-searches/saved-searches.component";
import {SavedSearchesModule} from "../components/saved-searches/saved-searches.module";

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    PopoverModule,
    PaginationHeaderModule,
    PaginationFooterModule,
    TableModule,
    SavedSearchesModule
  ],
  declarations: [SuppliersComponent, SuppliersListComponent, SuppliersDetailComponent]
})
export class SuppliersModule { }
