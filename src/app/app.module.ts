import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgxPaginationModule} from 'ngx-pagination';
import {PopoverModule} from 'ngx-popover';

import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { OrdersModule } from './orders/orders.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PaginationComponent } from './pagination/pagination.component';
// import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    // PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    OrdersModule,
    NgxPaginationModule,
    NavbarModule,
    FooterModule,
    AppRoutingModule
  ],
  providers: [NgModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
