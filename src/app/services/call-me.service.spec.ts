import { TestBed } from '@angular/core/testing';

import { CallMeService } from './call-me.service';

describe('CallMeService', () => {
  let service: CallMeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallMeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
