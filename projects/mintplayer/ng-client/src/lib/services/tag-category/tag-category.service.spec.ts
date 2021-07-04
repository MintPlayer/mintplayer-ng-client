import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BASE_URL } from '@mintplayer/ng-base-url';
import { TagCategoryService } from './tag-category.service';
import { API_VERSION } from '../../providers';

describe('TagCategoryService', () => {
  let tagCategoryService: TagCategoryService;
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

    tagCategoryService = TestBed.inject(TagCategoryService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(tagCategoryService).toBeTruthy();
  });

});
