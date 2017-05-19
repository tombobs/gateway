import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Page} from "../page";

@Component({
  selector: 'ig-pagination-header',
  templateUrl: './pagination-header.component.html',
  styleUrls: ['./pagination-header.component.scss']
})
export class PaginationHeaderComponent {

  @Input() page: Page;
  @Output() pageChange = new EventEmitter();

  savedSearchesVisible = false;
  advancedSearchVisible = false;

  onPageChange() {
    this.pageChange.emit(this.page);
  }
}
