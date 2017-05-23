import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersDetailMapComponent } from './suppliers-detail-map.component';

describe('SuppliersDetailMapComponent', () => {
  let component: SuppliersDetailMapComponent;
  let fixture: ComponentFixture<SuppliersDetailMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersDetailMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersDetailMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
