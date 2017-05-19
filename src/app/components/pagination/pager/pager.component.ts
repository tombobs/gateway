import {Component, OnInit, Input, Output, ElementRef, EventEmitter, Self, Renderer} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {NgModel} from '@angular/forms';

export interface IPaginationConfig {
  maxSize: number;
  itemsPerPage: number;
  boundaryLinks: boolean;
  boundaryLinkLimit: number;
  directionLinks: boolean;
  firstText: string;
  previousText: string;
  nextText: string;
  lastText: string;

  rotate: boolean;
}
export interface IPageChangedEvent {
  itemsPerPage: number;
  page: number;
}

const paginationConfig: IPaginationConfig = {
  maxSize:  5,
  itemsPerPage: 10,
  boundaryLinks: false,
  boundaryLinkLimit: 5,
  directionLinks: true,
  firstText: '<<',
  previousText: '<',
  nextText: '>',
  lastText: '>>',
  rotate: true
};


@Component({
  selector: 'ig-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
  viewProviders: [NgModel]
})
export class PagerComponent implements OnInit, IPaginationConfig {
  @Input() public maxSize: number;

  @Input() public boundaryLinks: boolean;
  @Input() public boundaryLinkLimit: number;
  @Input() public directionLinks: boolean;
  @Input() public firstText: string;
  @Input() public previousText: string;
  @Input() public nextText: string;
  @Input() public lastText: string;
  @Input() public rotate: boolean;

  @Input() private disabled: boolean;

  @Output() private numPages: EventEmitter<number> = new EventEmitter();
  @Output() private pageChanged: EventEmitter<IPageChangedEvent> = new EventEmitter();

  @Input()
  public get itemsPerPage() {
    return this._itemsPerPage;
  }

  public set itemsPerPage(v: number) {
    this._itemsPerPage = v;
    this.totalPages = this.calculateTotalPages();
  }

  @Input()
  private get totalItems(): number {
    return this._totalItems;
  }

  private set totalItems(v: number) {
    this._totalItems = v;
    this.totalPages = this.calculateTotalPages();
  }

  public config: any;
  private classMap: string;

  private _itemsPerPage: number;
  private _totalItems: number;
  private _totalPages: number;

  private inited = false;

  private get totalPages() {
    return this._totalPages;
  }

  private set totalPages(v: number) {
    this._totalPages = v;
    this.numPages.emit(v);
    if (this.inited) {
      this.selectPage(this.page);
    }
  }

  public set page(value) {
    const _previous = this._page;
    this._page = (value > this.totalPages) ? this.totalPages : (value || 1);

    if (_previous === this._page || typeof _previous === 'undefined') {
      return;
    }
    debugger
    this.pageChanged.emit({
      page: this._page,
      itemsPerPage: this.itemsPerPage
    });
  }

  public get page() {
    return this._page;
  }

  // ??
  private _page: number;
  private pages: Array<any>;

  constructor(@Self() public cd: NgModel, public renderer: Renderer, public elementRef: ElementRef) {
    cd.valueAccessor = this;
    this.config = this.config || paginationConfig;
  }

  ngOnInit() {
    this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
    // watch for maxSize
    this.maxSize = typeof this.maxSize !== 'undefined' ? this.maxSize : paginationConfig.maxSize;
    this.rotate = typeof this.rotate !== 'undefined' ? this.rotate : paginationConfig.rotate;
    this.boundaryLinks = typeof this.boundaryLinks !== 'undefined' ? this.boundaryLinks : paginationConfig.boundaryLinks;
    this.directionLinks = typeof this.directionLinks !== 'undefined' ? this.directionLinks : paginationConfig.directionLinks;

    // base class
    this.itemsPerPage = typeof this.itemsPerPage !== 'undefined' ? this.itemsPerPage : paginationConfig.itemsPerPage;
    this.totalPages = this.calculateTotalPages();
    // this class
    this.pages = this.getPages(this.page, this.totalPages);
    this.page = this.cd.value;
    this.inited = true;
  }

  writeValue(value: number) {
    this.page = value;
    this.pages = this.getPages(this.page, this.totalPages);
  }

  private selectPage(page: number, event?: MouseEvent) {
    if (event) {
      event.preventDefault();
    }

    if (!this.disabled) {
      if (event && event.target) {
        const target: any = event.target;
        target.blur();
      }
      this.writeValue(page);
      this.cd.viewToModelUpdate(this.page);
    }
  }

  private getText(key: string): string {
    return this[key + 'Text'] || paginationConfig[key + 'Text'];
  }

  private noPrevious(): boolean {
    return this.page === 1;
  }

  private noNext(): boolean {
    return this.page === this.totalPages;
  }

  // Create page object used in template
  private makePage(number: number, text: string, isActive: boolean): { number: number, text: string, active: boolean } {
    return {
      number: number,
      text: text,
      active: isActive
    };
  }

  private getPages(currentPage: number, totalPages: number): Array<any> {
    const pages: any[] = [];

    // Default page limits
    let startPage = 1;
    let endPage = totalPages;
    const isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;

    // recompute if maxSize
    if (isMaxSized) {
      if (this.rotate) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
        endPage = startPage + this.maxSize - 1;

        // Adjust if limit is exceeded
        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = endPage - this.maxSize + 1;
        }
      } else {
        // Visible pages are paginated with maxSize
        startPage = ((Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize) + 1;

        // Adjust last page if limit is exceeded
        endPage = Math.min(startPage + this.maxSize - 1, totalPages);
      }
    }

    // Add page number links
    for (let number = startPage; number <= endPage; number++) {
      const page = this.makePage(number, number.toString(), number === currentPage);
      pages.push(page);
    }

    // Add links to move between page sets
    if (isMaxSized && !this.rotate) {
      if (startPage > 1) {
        const previousPageSet = this.makePage(startPage - 1, '...', false);
        pages.unshift(previousPageSet);
      }

      if (endPage < totalPages) {
        const nextPageSet = this.makePage(endPage + 1, '...', false);
        pages.push(nextPageSet);
      }
    }

    return pages;
  }

  // base class
  private calculateTotalPages(): number {
    const totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
    return Math.max(totalPages || 0, 1);
  }

  onChange = (_: any) => {
  };
  onTouched = () => {
  };

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }
}
