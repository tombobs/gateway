import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAdvancedSearchComponent } from './order-advanced-search.component';
import {FormsModule} from "@angular/forms";
import {MyDatePicker, MyDatePickerModule} from "mydatepicker";
import {Injectable} from "@angular/core";
import {SuppliersService} from "../../suppliers/suppliers.service";
import {Observable} from "rxjs/Observable";

@Injectable()
class MockSuppliersService {
  getSuppliers() {
    return {
      subscribe: () => {}
    };
  }
}

describe('OrderAdvancedSearchComponent', () => {
  let component: OrderAdvancedSearchComponent;
  let fixture: ComponentFixture<OrderAdvancedSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MyDatePickerModule],
      declarations: [ OrderAdvancedSearchComponent ],
      providers: [
        {provide: SuppliersService, useClass: MockSuppliersService}
      ]
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
