import { Component, OnInit } from '@angular/core';
import {SuppliersService} from "../suppliers.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ig-suppliers-detail',
  templateUrl: './suppliers-detail.component.html',
  styleUrls: ['./suppliers-detail.component.scss']
})
export class SuppliersDetailComponent implements OnInit {

  supplier;
  sections = [
    {
      label: 'Overview',
      route: 'overview'
    },
    {
      label: 'Map',
      route: 'map'
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.supplier = this.route.snapshot.data['supplier'].supplier;
  }
}
