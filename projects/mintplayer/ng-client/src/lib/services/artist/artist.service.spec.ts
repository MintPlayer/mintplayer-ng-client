import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BASE_URL } from '@mintplayer/ng-base-url';
import { ArtistService } from './artist.service';
import { API_VERSION } from '../../providers';

describe('ArtistService', () => {
  let artistService: ArtistService;
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

    artistService = TestBed.inject(ArtistService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(artistService).toBeTruthy();
  });

});
