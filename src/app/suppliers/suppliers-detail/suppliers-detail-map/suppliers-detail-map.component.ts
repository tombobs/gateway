import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ig-suppliers-detail-map',
  templateUrl: './suppliers-detail-map.component.html',
  styleUrls: ['./suppliers-detail-map.component.scss']
})
export class SuppliersDetailMapComponent implements OnInit {

  supplier;
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.supplier = this.route.snapshot.data['supplier'].supplier;
  }

}
