import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginationHeaderComponent} from "./pagination-header.component";
import {FormsModule} from "@angular/forms";
import {PopoverModule} from "ngx-popover";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PopoverModule
  ],
  declarations: [PaginationHeaderComponent],
  exports: [PaginationHeaderComponent]
})
export class PaginationHeaderModule { }
