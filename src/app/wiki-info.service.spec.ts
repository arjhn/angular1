import { TestBed } from '@angular/core/testing';

import { WikiInfoService } from './wiki-info.service';

describe('WikiInfoService', () => {
  let service: WikiInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikiInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
