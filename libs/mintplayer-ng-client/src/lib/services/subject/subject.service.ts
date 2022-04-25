import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MINTPLAYER_BASE_URL } from '../../providers/mintplayer-base-url.provider';
import { MINTPLAYER_API_VERSION } from '../../providers/mintplayer-api-version.provider';
import { SearchResults } from '../../entities/search/search-results';
import { Subject } from '../../entities/core/subject';
import { SubjectLikeResponse } from '../../entities/core/subject-like-response';
import { ESubjectType } from '../../enums/subject-type';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  constructor(private httpClient: HttpClient, @Inject(MINTPLAYER_BASE_URL) private baseUrl: string, @Inject(MINTPLAYER_API_VERSION) private apiVersion: string) {
  }

  public getLikes(subject: Subject) {
    return this.httpClient.get<SubjectLikeResponse>(`${this.baseUrl}/web/${this.apiVersion}/subject/${subject.id}/likes`);
  }

  public like(subject: Subject, like: boolean) {
    return this.httpClient.post<SubjectLikeResponse>(`${this.baseUrl}/web/${this.apiVersion}/subject/${subject.id}/likes`, like, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  public getLikedSubjects() {
    return this.httpClient.get<Subject[]>(`${this.baseUrl}/web/${this.apiVersion}/subject/favorite`);
  }

  public suggest(search: string, subjects: ESubjectType[], includeRelations: boolean = false) {
    return this.httpClient.post<Subject[]>(`${this.baseUrl}/web/${this.apiVersion}/subject/search/suggest`, {
      searchTerm: search,
      subjectTypes: subjects
    }, {
      headers: {
        include_relations: String(includeRelations)
      }
    });
  }

  public search(search: string, subjects: ESubjectType[], includeRelations: boolean = false) {
    return this.httpClient.post<SearchResults>(`${this.baseUrl}/web/${this.apiVersion}/subject/search`, {
      searchTerm: search,
      subjectTypes: subjects
    }, {
      headers: {
        include_relations: String(includeRelations)
      }
    });
  }
}
