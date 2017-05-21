import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ig-suppliers-detail',
  templateUrl: './suppliers-detail.component.html',
  styleUrls: ['./suppliers-detail.component.scss']
})
export class SuppliersDetailComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

}
