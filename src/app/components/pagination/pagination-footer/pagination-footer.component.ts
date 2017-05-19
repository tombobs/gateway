import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Page} from "../page";

@Component({
  selector: 'ig-pagination-footer',
  templateUrl: './pagination-footer.component.html',
  styleUrls: ['./pagination-footer.component.scss']
})
export class PaginationFooterComponent implements OnInit {

  @Input() page: Page;
  @Output() pageChange = new EventEmitter();

  ngOnInit() {
  }

  onPageChange(pageChangeEvent) {
    this.page.pageNumber = pageChangeEvent.page;
    this.pageChange.emit(this.page);
  }

}
