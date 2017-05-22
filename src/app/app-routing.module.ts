import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import {SuppliersComponent} from "./suppliers/suppliers.component";
import {HomeComponent} from "./home/home.component";
import {SuppliersDetailComponent} from "./suppliers/suppliers-detail/suppliers-detail.component";
import {SuppliersListComponent} from "./suppliers/suppliers-list/suppliers-list.component";
import {SuppliersDetailOverviewComponent} from "./suppliers/suppliers-detail/suppliers-detail-overview/suppliers-detail-overview.component";
import {SuppliersDetailMapComponent} from "./suppliers/suppliers-detail/suppliers-detail-map/suppliers-detail-map.component";

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

    children: [
      {
        path: 'list',
        component: SuppliersListComponent,
        data: {pageTitle: 'Suppliers'}
      },
      {
        path: ':id',
        component: SuppliersDetailComponent,
        children: [
          {
            path: 'overview',
            component: SuppliersDetailOverviewComponent
          },
          {
            path: 'map',
            component: SuppliersDetailMapComponent
          }
        ]
      }
    ]
  },
  {
    path: 'supplier/:id',
    component: SuppliersDetailComponent
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
