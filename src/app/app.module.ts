import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgxPaginationModule} from 'ngx-pagination';
import {PopoverModule} from "ngx-popover";
import { TypeaheadComponent } from './typeahead/typeahead.component';

import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { OrdersModule } from './orders/orders.module';
import { LoginModule } from './login/login.module';
import { SuppliersModule } from './suppliers/suppliers.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import {PaginationHeaderComponent} from './pagination/pagination-header/pagination-header.component';
import {PaginationHeaderModule} from "./pagination/pagination-header/pagination-header.module";
import {PaginationFooterComponent} from './pagination/pagination-footer/pagination-footer.component';
import {PagerComponent} from "./pagination/pager/pager.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TypeaheadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PopoverModule,
    NgxPaginationModule,
    AppRoutingModule,

    OrdersModule,
    NavbarModule,
    FooterModule,
    LoginModule,
    PaginationHeaderModule,
    SuppliersModule,

  ],
  providers: [NgModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
