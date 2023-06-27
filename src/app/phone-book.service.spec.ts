import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PhoneBookService } from './phone-book.service';

describe('PhoneBookService', () => {
  let service: PhoneBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(PhoneBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
