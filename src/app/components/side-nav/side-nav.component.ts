import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ig-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() items;
  constructor() { }

  ngOnInit() {
  }

}
