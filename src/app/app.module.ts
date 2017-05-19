import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {NgxPaginationModule} from 'ngx-pagination';
import {PopoverModule} from "ngx-popover";
import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { Ng2PageTransitionModule } from "ng2-page-transition";

import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { OrdersModule } from './orders/orders.module';
import { LoginModule } from './login/login.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TypeaheadComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PopoverModule,
    NgxPaginationModule,
    Ng2PageTransitionModule,
    BrowserAnimationsModule,

    OrdersModule,
    NavbarModule,
    FooterModule,
    LoginModule,
    SuppliersModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [NgModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
