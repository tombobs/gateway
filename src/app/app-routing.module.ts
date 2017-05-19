import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import {SuppliersComponent} from "./suppliers/suppliers.component";
import {HomeComponent} from "./home/home.component";
import {SuppliersDetailComponent} from "./suppliers/suppliers-detail/suppliers-detail.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'orders',
    component: OrdersComponent,
    data: {
      pageTitle: 'Order items'
    }
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'suppliers',
    component: SuppliersComponent,
    data: {
      pageTitle: 'Suppliers'
    },
    children: [
      {
        path: ':id',
        component: SuppliersDetailComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
