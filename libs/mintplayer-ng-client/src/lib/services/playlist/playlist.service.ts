import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginationRequest, PaginationResponse } from '@mintplayer/pagination';
import { Playlist } from '../../entities/core/playlist';
import { MINTPLAYER_BASE_URL } from '../../providers/mintplayer-base-url.provider';
import { MINTPLAYER_API_VERSION } from '../../providers/mintplayer-api-version.provider';
import { EPlaylistScope } from '../../enums/playlist-scope';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  constructor(private httpClient: HttpClient, @Inject(MINTPLAYER_BASE_URL) private baseUrl: string, @Inject(MINTPLAYER_API_VERSION) private apiVersion: string) {
  }

  public pagePlaylists(request: PaginationRequest, scope: EPlaylistScope) {
    switch (scope) {
      case EPlaylistScope.my:
        return this.httpClient.post<PaginationResponse<Playlist>>(`${this.baseUrl}/web/${this.apiVersion}/playlist/my/page`, request);
      case EPlaylistScope.public:
        return this.httpClient.post<PaginationResponse<Playlist>>(`${this.baseUrl}/web/${this.apiVersion}/playlist/public/page`, request);
    }
  }

  public getPlaylists(scope: EPlaylistScope, include_relations: boolean = false) {
    const headers = {
      'include_relations': String(include_relations)
    };

    switch (scope) {
      case EPlaylistScope.my:
        return this.httpClient.get<Playlist[]>(`${this.baseUrl}/web/${this.apiVersion}/playlist/my`, { headers });
      case EPlaylistScope.public:
        return this.httpClient.get<Playlist[]>(`${this.baseUrl}/web/${this.apiVersion}/playlist/public`, { headers });
    }
  }

  public getPlaylist(id: number, include_relations: boolean = false) {
    return this.httpClient.get<Playlist>(`${this.baseUrl}/web/${this.apiVersion}/playlist/${id}`, {
      headers: {
        'include_relations': String(include_relations)
      }
    });
  }

  public createPlaylist(playlist: Playlist) {
    return this.httpClient.post<Playlist>(`${this.baseUrl}/web/${this.apiVersion}/playlist`, playlist);
  }

  public updatePlaylist(playlist: Playlist) {
    return this.httpClient.put<Playlist>(`${this.baseUrl}/web/${this.apiVersion}/playlist/${playlist.id}`, playlist);
  }

  public deletePlaylist(playlist: Playlist) {
    return this.httpClient.delete<Playlist>(`${this.baseUrl}/web/${this.apiVersion}/playlist/${playlist.id}`);
  }
}
