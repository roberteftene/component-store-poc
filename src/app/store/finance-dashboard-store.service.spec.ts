import { TestBed } from '@angular/core/testing';

import { FinanceDashboardStoreService } from './finance-dashboard-store.service';

describe('FinanceDashboardStoreService', () => {
  let service: FinanceDashboardStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinanceDashboardStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
