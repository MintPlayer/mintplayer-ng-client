import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BASE_URL } from '@mintplayer/ng-base-url';
import { BlogPostService } from './blog-post.service';
import { API_VERSION } from '../../providers';

describe('BlogPostService', () => {
  let blogPostService: BlogPostService;
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

    blogPostService = TestBed.inject(BlogPostService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(blogPostService).toBeTruthy();
  });

});
