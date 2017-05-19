import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationFooterComponent } from './pagination-footer.component';
import {FormsModule} from "@angular/forms";
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import {PagerModule} from "../pager/pager.module";
import {Page} from "../page";

describe('PaginationFooterComponent', () => {
  let component: PaginationFooterComponent;
  let fixture: ComponentFixture<PaginationFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, PagerModule],
      declarations: [ PaginationFooterComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
