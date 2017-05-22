import { TestBed, inject } from '@angular/core/testing';

import { OrdersService } from './orders.service';
import {BaseRequestOptions, Http} from "@angular/http";
import {MockBackend} from "@angular/http/testing";

describe('OrdersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OrdersService,
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

  it('should ...', inject([OrdersService], (service: OrdersService) => {
    expect(service).toBeTruthy();
  }));
});
