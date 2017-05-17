import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {} from ''
import { SuppliersComponent } from './suppliers.component';
import {PaginationHeaderModule} from "../pagination/pagination-header/pagination-header.module";
import {PaginationHeaderComponent} from "../pagination/pagination-header/pagination-header.component";
import {SuppliersModule} from "./suppliers.module";
import {SuppliersListComponent} from "./suppliers-list/suppliers-list.component";
import {PaginationFooterModule} from "../pagination/pagination-footer/pagination-footer.module";
import {PaginationFooterComponent} from "../pagination/pagination-footer/pagination-footer.component";
import {PopoverModule} from "ngx-popover/index";
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

describe('SuppliersComponent', () => {
  let component: SuppliersComponent;
  let fixture: ComponentFixture<SuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersComponent , SuppliersListComponent],
      imports: [

        NgxDatatableModule,
        PopoverModule,
        PaginationHeaderModule,
        PaginationFooterModule],
      providers: [PaginationHeaderComponent, PaginationFooterComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
