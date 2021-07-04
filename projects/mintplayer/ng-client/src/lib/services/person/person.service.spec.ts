import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BASE_URL } from '@mintplayer/ng-base-url';
import { PersonService } from './person.service';
import { API_VERSION } from '../../providers';

describe('PersonService', () => {
  let personService: PersonService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: BASE_URL, useValue: 'http://localhost' },
        { provide: API_VERSION, useValue: 'v3' }
      ]
    });

    personService = TestBed.inject(PersonService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(personService).toBeTruthy();
  });

});
