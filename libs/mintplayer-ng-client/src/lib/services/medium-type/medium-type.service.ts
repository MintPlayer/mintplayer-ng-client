import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MINTPLAYER_BASE_URL } from '../../providers/mintplayer-base-url.provider';
import { MINTPLAYER_API_VERSION } from '../../providers/mintplayer-api-version.provider';
import { MediumType } from '../../entities/media/medium-type';

@Injectable({
  providedIn: 'root'
})
export class MediumTypeService {
  constructor(private httpClient: HttpClient, @Inject(MINTPLAYER_BASE_URL) private baseUrl: string, @Inject(MINTPLAYER_API_VERSION) private apiVersion: string) {
  }

  public getMediumTypes(include_relations: boolean) {
    return this.httpClient.get<MediumType[]>(`${this.baseUrl}/web/${this.apiVersion}/mediumtype`, {
      headers: {
        'include_relations': String(include_relations),
      }
    });
  }

  public getMediumType(id: number, include_relations: boolean) {
    return this.httpClient.get<MediumType>(`${this.baseUrl}/web/${this.apiVersion}/mediumtype/${id}`, {
      headers: {
        'include_relations': String(include_relations),
      }
    });
  }

  public createMediumType(mediumtype: MediumType) {
    return this.httpClient.post<MediumType>(`${this.baseUrl}/web/${this.apiVersion}/mediumtype`, mediumtype);
  }

  public updateMediumType(mediumtype: MediumType) {
    return this.httpClient.put<MediumType>(`${this.baseUrl}/web/${this.apiVersion}/mediumtype/${mediumtype.id}`, mediumtype);
  }

  public deleteMediumType(mediumtype: MediumType) {
    return this.httpClient.delete(`${this.baseUrl}/web/${this.apiVersion}/mediumtype/${mediumtype.id}`);
  }
}
