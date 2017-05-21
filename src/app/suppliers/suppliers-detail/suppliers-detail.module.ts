import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SuppliersDetailComponent} from "./suppliers-detail.component";
import {SuppliersDetailOverviewComponent} from "./suppliers-detail-overview/suppliers-detail-overview.component";
import {SuppliersDetailMapComponent} from "./suppliers-detail-map/suppliers-detail-map.component";
import {SideNavComponent} from "../../components/side-nav/side-nav.component";
import {SideNavModule} from "../../components/side-nav/side-nav.module";
import {RouterModule} from "@angular/router";
import {AgmCoreModule} from "angular2-google-maps/core";

@NgModule({
  imports: [
    CommonModule,
    SideNavModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDtJNl2tAZMoyAcdtInBYENsvAIKpQ12mk'
    }),
  ],
  declarations: [
    SuppliersDetailComponent,
    SuppliersDetailOverviewComponent,
    SuppliersDetailMapComponent
  ],
  exports: [
    // SuppliersDetailComponent,
    // SuppliersDetailOverviewComponent,
    // SuppliersDetailMapComponent
  ]
})
export class SuppliersDetailModule { }
