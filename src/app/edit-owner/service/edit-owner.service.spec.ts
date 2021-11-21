import { TestBed } from '@angular/core/testing';

import { EditOwnerService } from './edit-owner.service';

describe('EditOwnerService', () => {
  let service: EditOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
