import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BASE_URL } from '@mintplayer/ng-base-url';
import { PlaylistService } from './playlist.service';
import { API_VERSION } from '../../providers';

describe('PlaylistService', () => {
  let playlistService: PlaylistService;
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

    playlistService = TestBed.inject(PlaylistService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(playlistService).toBeTruthy();
  });

});
