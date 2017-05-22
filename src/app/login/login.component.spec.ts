import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {FormsModule} from "@angular/forms";
import {LoginService} from "./login.service";
import {Injectable} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";

@Injectable()
class MockLoginService {
  login() {

  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [ LoginComponent ],
      providers: [{provide: LoginService, useClass: MockLoginService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
