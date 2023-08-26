import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginationRequest, PaginationResponse } from '@mintplayer/pagination';
import { MINTPLAYER_BASE_URL } from '../../providers/mintplayer-base-url.provider';
import { MINTPLAYER_API_VERSION } from '../../providers/mintplayer-api-version.provider';
import { Person } from '../../entities/core/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private httpClient: HttpClient, @Inject(MINTPLAYER_BASE_URL) private baseUrl: string, @Inject(MINTPLAYER_API_VERSION) private apiVersion: string) {
  }

  public pagePeople(request: PaginationRequest) {
    return this.httpClient.post<PaginationResponse<Person>>(`${this.baseUrl}/web/${this.apiVersion}/person/page`, request);
  }

  public getPeople(include_relations: boolean) {
    return this.httpClient.get<Person[]>(`${this.baseUrl}/web/${this.apiVersion}/person`, {
      headers: {
        'include_relations': String(include_relations)
      }
    });
  }

  public getPerson(id: number, include_relations: boolean) {
    return this.httpClient.get<Person>(`${this.baseUrl}/web/${this.apiVersion}/person/${id}`, {
      headers: {
        'include_relations': String(include_relations)
      }
    });
  }

  public pageFavoritePeople(request: PaginationRequest) {
    return this.httpClient.post<PaginationResponse<Person>>(`${this.baseUrl}/web/${this.apiVersion}/person/favorite`, request);
  }

  public getFavoritePeople() {
    return this.httpClient.get<Person[]>(`${this.baseUrl}/web/${this.apiVersion}/person/favorite`);
  }

  public createPerson(person: Person) {
    return this.httpClient.post<Person>(`${this.baseUrl}/web/${this.apiVersion}/person`, person);
  }

  public updatePerson(person: Person) {
    return this.httpClient.put<Person>(`${this.baseUrl}/web/${this.apiVersion}/person/${person.id}`, person);
  }

  public deletePerson(person: Person) {
    return this.httpClient.delete(`${this.baseUrl}/web/${this.apiVersion}/person/${person.id}`);
  }
}
