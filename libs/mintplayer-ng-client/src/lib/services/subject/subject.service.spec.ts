import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SubjectService } from './subject.service';
import { MINTPLAYER_BASE_URL } from '../../providers/mintplayer-base-url.provider';
import { MINTPLAYER_API_VERSION } from '../../providers/mintplayer-api-version.provider';

describe('SubjectService', () => {
  let subjectService: SubjectService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: MINTPLAYER_BASE_URL, useValue: 'http://localhost' },
        { provide: MINTPLAYER_API_VERSION, useValue: 'v3' }
      ]
    });

    subjectService = TestBed.inject(SubjectService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(subjectService).toBeTruthy();
  });

});
