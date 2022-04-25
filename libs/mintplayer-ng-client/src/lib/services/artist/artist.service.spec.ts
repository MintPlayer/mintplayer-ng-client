import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MINTPLAYER_BASE_URL } from '../../providers/mintplayer-base-url.provider';
import { MINTPLAYER_API_VERSION } from '../../providers/mintplayer-api-version.provider';
import { ArtistService } from './artist.service';

describe('ArtistService', () => {
  let artistService: ArtistService;
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

    artistService = TestBed.inject(ArtistService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(artistService).toBeTruthy();
  });

});
