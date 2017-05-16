import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { OrdersModule } from './orders/orders.module';
import { LoginModule } from './login/login.module';
import { SuppliersModule } from './suppliers/suppliers.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import {} from 'ng2-bootstrap-typeahead';
import { PaginationHeaderComponent } from './pagination/pagination-header/pagination-header.component';
import {PaginationHeaderModule} from "./pagination/pagination-header/pagination-header.module";
import {PopoverModule} from "ngx-popover";
import { PaginationFooterComponent } from './pagination/pagination-footer/pagination-footer.component';
import {PaginationComponent} from "./pagination/pager/pagination.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PopoverModule,
    OrdersModule,
    NgxPaginationModule,
    NavbarModule,
    FooterModule,
    LoginModule,
    PaginationHeaderModule,
    SuppliersModule,
    AppRoutingModule,

  ],
  providers: [NgModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
