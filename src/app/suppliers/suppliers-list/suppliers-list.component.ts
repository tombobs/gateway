import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ig-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.scss']
})
export class SuppliersListComponent implements OnInit {

  @Input() rows;
  constructor() { }

  ngOnInit() {
  }

}
