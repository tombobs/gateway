import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Page} from "../page";
declare var require: any;
const paginationConfig = require('../../../config/pagination.json');

@Component({
  selector: 'ig-pagination-header',
  templateUrl: './pagination-header.component.html',
  styleUrls: ['./pagination-header.component.scss']
})
export class PaginationHeaderComponent implements OnInit {

  _page = new Page();
  advancedSearchVisible = false;

  @Input()
  get page() {
    return this._page;
  }

  @Output()
  pageChange = new EventEmitter();

  set page(value) {
    this._page = value;
    this.pageChange.emit(this._page);
  }

  private numToDisplayOpts: any;

  ngOnInit() {
    // this.page = new Page();
    this.numToDisplayOpts = paginationConfig.numToDisplayOptions;
    this.page.pageSize = this.numToDisplayOpts[0].number;
    // this.load(this.page);
  }

  onPageChange() {
    this.pageChange.emit(this._page);
  }

}
