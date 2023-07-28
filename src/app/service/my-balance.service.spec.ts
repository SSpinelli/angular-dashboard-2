import { TestBed } from '@angular/core/testing';

import { MyBalanceService } from './my-balance.service';

describe('MyBalanceService', () => {
  let service: MyBalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyBalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
