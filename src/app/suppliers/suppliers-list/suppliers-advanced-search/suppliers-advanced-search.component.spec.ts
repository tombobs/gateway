import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersAdvancedSearchComponent } from './suppliers-advanced-search.component';

describe('SuppliersAdvancedSearchComponent', () => {
  let component: SuppliersAdvancedSearchComponent;
  let fixture: ComponentFixture<SuppliersAdvancedSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersAdvancedSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersAdvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
