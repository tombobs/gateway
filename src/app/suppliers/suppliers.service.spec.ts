import { TestBed, inject } from '@angular/core/testing';
import {HttpModule, XHRBackend} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import { SuppliersService } from './suppliers.service';

describe('SuppliersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ {provide: XHRBackend, useClass: MockBackend }, SuppliersService ]
    });
  });

  it('should ...', inject([SuppliersService], (service: SuppliersService) => {
    expect(service).toBeTruthy();
  }));
});
