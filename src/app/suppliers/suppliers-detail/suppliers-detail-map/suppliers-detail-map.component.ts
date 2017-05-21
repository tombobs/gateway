import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ig-suppliers-detail-map',
  templateUrl: './suppliers-detail-map.component.html',
  styleUrls: ['./suppliers-detail-map.component.scss']
})
export class SuppliersDetailMapComponent implements OnInit {

  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
