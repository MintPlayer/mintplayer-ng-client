import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginationRequest, PaginationResponse } from '@mintplayer/pagination';
import { MINTPLAYER_BASE_URL } from '../../providers/mintplayer-base-url.provider';
import { MINTPLAYER_API_VERSION } from '../../providers/mintplayer-api-version.provider';
import { Lyrics } from '../../entities/core/lyrics';
import { Song } from '../../entities/core/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  constructor(private httpClient: HttpClient, @Inject(MINTPLAYER_BASE_URL) private baseUrl: string, @Inject(MINTPLAYER_API_VERSION) private apiVersion: string) {
  }

  public pageSongs(request: PaginationRequest) {
    return this.httpClient.post<PaginationResponse<Song>>(`${this.baseUrl}/web/${this.apiVersion}/song/page`, request);
  }

  public getSongs(include_relations: boolean) {
    return this.httpClient.get<Song[]>(`${this.baseUrl}/web/${this.apiVersion}/song`, {
      headers: {
        'include_relations': String(include_relations)
      }
    });
  }

  public getSong(id: number, include_relations: boolean) {
    return this.httpClient.get<Song>(`${this.baseUrl}/web/${this.apiVersion}/song/${id}`, {
      headers: {
        'include_relations': String(include_relations)
      }
    });
  }

  public pageFavoriteSongs(request: PaginationRequest) {
    return this.httpClient.post<PaginationResponse<Song>>(`${this.baseUrl}/web/${this.apiVersion}/song/favorite`, request);
  }

  public getFavoriteSongs() {
    return this.httpClient.get<Song[]>(`${this.baseUrl}/web/${this.apiVersion}/song/favorite`);
  }

  public getLyrics(songId: number) {
    return this.httpClient.get<Lyrics>(`${this.baseUrl}/web/${this.apiVersion}/song/${songId}/lyrics`);
  }

  public createSong(song: Song) {
    return this.httpClient.post<Song>(`${this.baseUrl}/web/${this.apiVersion}/song`, song);
  }

  public updateSong(song: Song) {
    return this.httpClient.put<Song>(`${this.baseUrl}/web/${this.apiVersion}/song/${song.id}`, song);
  }

  public updateTimeline(song: Song) {
    return this.httpClient.put(`${this.baseUrl}/web/${this.apiVersion}/song/${song.id}/timeline`, song);
  }

  public deleteSong(song: Song) {
    return this.httpClient.delete(`${this.baseUrl}/web/${this.apiVersion}/song/${song.id}`);
  }
}
