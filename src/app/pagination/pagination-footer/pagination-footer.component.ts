import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Page} from "../page";
const paginationConfig = require('../../../config/pagination.json');

@Component({
  selector: 'ig-pagination-footer',
  templateUrl: './pagination-footer.component.html',
  styleUrls: ['./pagination-footer.component.scss']
})
export class PaginationFooterComponent implements OnInit {

  @Input() page: Page;
  @Output() pageChange = new EventEmitter();

  numToDisplayOpts = paginationConfig.numToDisplayOptions;

  constructor() {}

  ngOnInit() {
    this.page.pageSize = this.numToDisplayOpts[0].number;
  }

  pageChanged(event) {
    this.page.pageNumber = event.page;
    this.pageChange.emit(this.page);
  }

}
