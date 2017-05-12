import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAdvancedSearchComponent } from './order-advanced-search.component';

describe('OrderAdvancedSearchComponent', () => {
  let component: OrderAdvancedSearchComponent;
  let fixture: ComponentFixture<OrderAdvancedSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderAdvancedSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderAdvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
