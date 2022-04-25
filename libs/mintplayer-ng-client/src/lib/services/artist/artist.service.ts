import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginationRequest, PaginationResponse } from '@mintplayer/ng-pagination';
import { MINTPLAYER_BASE_URL } from '../../providers/mintplayer-base-url.provider';
import { MINTPLAYER_API_VERSION } from '../../providers/mintplayer-api-version.provider';
import { Artist } from '../../entities/core/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private httpClient: HttpClient, @Inject(MINTPLAYER_BASE_URL) private baseUrl: string, @Inject(MINTPLAYER_API_VERSION) private apiVersion: string) {
  }

  public pageArtists(request: PaginationRequest) {
    return this.httpClient.post<PaginationResponse<Artist>>(`${this.baseUrl}/web/${this.apiVersion}/artist/page`, request);
  }

  public getArtists(include_relations: boolean) {
    return this.httpClient.get<Artist[]>(`${this.baseUrl}/web/${this.apiVersion}/artist`, {
      headers: {
        'include_relations': String(include_relations)
      }
    });
  }

  public getArtist(id: number, include_relations: boolean) {
    return this.httpClient.get<Artist>(`${this.baseUrl}/web/${this.apiVersion}/artist/${id}`, {
      headers: {
        'include_relations': String(include_relations)
      }
    });
  }

  public pageFavoriteArtists(request: PaginationRequest) {
    return this.httpClient.post<PaginationResponse<Artist>>(`${this.baseUrl}/web/${this.apiVersion}/artist/favorite`, request);
  }

  public getFavoriteArtists() {
    return this.httpClient.get<Artist[]>(`${this.baseUrl}/web/${this.apiVersion}/artist/favorite`);
  }

  public createArtist(artist: Artist) {
    return this.httpClient.post<Artist>(`${this.baseUrl}/web/${this.apiVersion}/artist`, artist);
  }

  public updateArtist(artist: Artist) {
    return this.httpClient.put<Artist>(`${this.baseUrl}/web/${this.apiVersion}/artist/${artist.id}`, artist);
  }

  public deleteArtist(artist: Artist) {
    return this.httpClient.delete(`${this.baseUrl}/web/${this.apiVersion}/artist/${artist.id}`);
  }

}
