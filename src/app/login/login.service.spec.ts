import {TestBed, inject} from '@angular/core/testing';

import {LoginService} from './login.service';
import {BaseRequestOptions, Http, HttpModule} from "@angular/http";
import {MockBackend} from "@angular/http/testing";

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({

      providers: [
        LoginService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => {
            return new Http(backend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });


  });

  it('should ...', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
