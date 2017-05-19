import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationHeaderComponent } from './pagination-header.component';
import {FormsModule} from "@angular/forms";
import {PopoverModule} from "ngx-popover";

describe('PaginationHeaderComponent', () => {
  let component: PaginationHeaderComponent;
  let fixture: ComponentFixture<PaginationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, PopoverModule],
      declarations: [ PaginationHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
