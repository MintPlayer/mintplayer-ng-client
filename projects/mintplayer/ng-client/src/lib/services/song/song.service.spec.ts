import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BASE_URL } from '@mintplayer/ng-base-url';
import { SongService } from './song.service';
import { API_VERSION } from '../../providers';

describe('SongService', () => {
  let songService: SongService;
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

    songService = TestBed.inject(SongService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(songService).toBeTruthy();
  });

});
