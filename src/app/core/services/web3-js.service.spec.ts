import { TestBed } from '@angular/core/testing';

import { Web3JsService } from './web3-js.service';

describe('Web3JsService', () => {
  let service: Web3JsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Web3JsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
