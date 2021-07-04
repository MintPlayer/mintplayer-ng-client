import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BASE_URL } from '@mintplayer/ng-base-url';
import { MediumTypeService } from './medium-type.service';
import { API_VERSION } from '../../providers';

describe('MediumTypeService', () => {
  let mediumTypeService: MediumTypeService;
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

    mediumTypeService = TestBed.inject(MediumTypeService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(mediumTypeService).toBeTruthy();
  });

});
