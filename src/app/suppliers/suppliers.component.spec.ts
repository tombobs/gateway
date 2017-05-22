import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {} from ''
import { SuppliersComponent } from './suppliers.component';
import {PaginationHeaderModule} from "../components/pagination/pagination-header/pagination-header.module";
import {PaginationHeaderComponent} from "../components/pagination/pagination-header/pagination-header.component";
import {SuppliersModule} from "./suppliers.module";
import {SuppliersListComponent} from "./suppliers-list/suppliers-list.component";
import {PaginationFooterModule} from "../components/pagination/pagination-footer/pagination-footer.module";
import {PaginationFooterComponent} from "../components/pagination/pagination-footer/pagination-footer.component";
import {PopoverModule} from "ngx-popover/index";
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {SuppliersService} from "./suppliers.service";
import {Http, HttpModule, XHRBackend} from "@angular/http";
import {MockBackend} from "@angular/http/testing";

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
        PaginationFooterModule,
        HttpModule
      ],
      providers: [
        PaginationHeaderComponent,
        PaginationFooterComponent,
        SuppliersService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
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
