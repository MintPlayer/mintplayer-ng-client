import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BASE_URL } from '@mintplayer/ng-base-url';
import { SubjectService } from './subject.service';
import { API_VERSION } from '../../providers';

describe('SubjectService', () => {
  let subjectService: SubjectService;
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

    subjectService = TestBed.inject(SubjectService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(subjectService).toBeTruthy();
  });

});
