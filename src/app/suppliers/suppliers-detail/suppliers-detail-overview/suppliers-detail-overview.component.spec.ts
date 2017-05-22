import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersDetailOverviewComponent } from './suppliers-detail-overview.component';

describe('SuppliersDetailOverviewComponent', () => {
  let component: SuppliersDetailOverviewComponent;
  let fixture: ComponentFixture<SuppliersDetailOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersDetailOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersDetailOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
