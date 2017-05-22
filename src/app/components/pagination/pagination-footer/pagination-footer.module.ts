import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagerModule} from "../pager/pager.module";
import {PaginationFooterComponent} from "./pagination-footer.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagerModule
  ],
  declarations: [PaginationFooterComponent],
  exports: [PaginationFooterComponent]
})
export class PaginationFooterModule { }
