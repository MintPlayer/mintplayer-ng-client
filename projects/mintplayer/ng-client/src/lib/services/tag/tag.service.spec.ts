import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BASE_URL } from '@mintplayer/ng-base-url';
import { TagService } from './tag.service';
import { API_VERSION } from '../../providers';

describe('TagService', () => {
  let tagService: TagService;
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

    tagService = TestBed.inject(TagService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(tagService).toBeTruthy();
  });

});
