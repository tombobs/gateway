import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ig-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() rows;
  @Input() columns;
  @ContentChild(ElementRef) column: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log(this.column)
  }

}
