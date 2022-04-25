import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TagCategoryService } from './tag-category.service';
import { MINTPLAYER_BASE_URL } from '../../providers/mintplayer-base-url.provider';
import { MINTPLAYER_API_VERSION } from '../../providers/mintplayer-api-version.provider';

describe('TagCategoryService', () => {
  let tagCategoryService: TagCategoryService;
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

    tagCategoryService = TestBed.inject(TagCategoryService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(tagCategoryService).toBeTruthy();
  });

});
