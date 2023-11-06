import { TestBed } from '@angular/core/testing';

import { DialogErrorService } from './dialog-error.service';

describe('DialogErrorService', () => {
  let service: DialogErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
