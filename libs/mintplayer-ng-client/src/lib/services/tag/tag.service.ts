import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginationRequest, PaginationResponse } from '@mintplayer/ng-pagination';
import { MINTPLAYER_BASE_URL } from '../../providers/mintplayer-base-url.provider';
import { MINTPLAYER_API_VERSION } from '../../providers/mintplayer-api-version.provider';
import { Tag } from '../../entities/tags/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  constructor(private httpClient: HttpClient, @Inject(MINTPLAYER_BASE_URL) private baseUrl: string, @Inject(MINTPLAYER_API_VERSION) private apiVersion: string) {
  }

  public pageTags(request: PaginationRequest) {
    return this.httpClient.post<PaginationResponse<Tag>>(`${this.baseUrl}/web/${this.apiVersion}/Tag/page`, request);
  }

  public suggestTags(search: string, includeRelations: boolean = false) {
    return this.httpClient.post<Tag[]>(`${this.baseUrl}/web/${this.apiVersion}/Tag/suggest`, {
      searchTerm: search
    }, {
      headers: {
        include_relations: String(includeRelations)
      }
    });
  }

  public searchTags(search: string) {
    return this.httpClient.post<Tag[]>(`${this.baseUrl}/web/${this.apiVersion}/Tag/search`, { searchTerm: search });
  }

  public getTags(include_relations: boolean) {
    return this.httpClient.get<Tag[]>(`${this.baseUrl}/web/${this.apiVersion}/Tag`, {
      headers: {
        'include_relations': String(include_relations)
      }
    });
  }

  public getTag(id: number, include_relations: boolean) {
    return this.httpClient.get<Tag>(`${this.baseUrl}/web/${this.apiVersion}/Tag/${id}`, {
      headers: {
        'include_relations': String(include_relations)
      }
    });
  }

  public createTag(tag: Tag) {
    const clone = this.removeSubjects(tag);
    return this.httpClient.post<Tag>(`${this.baseUrl}/web/${this.apiVersion}/Tag`, clone);
  }

  public updateTag(tag: Tag) {
    const clone = this.removeSubjects(tag);
    return this.httpClient.put<Tag>(`${this.baseUrl}/web/${this.apiVersion}/Tag/${tag.id}`, clone);
  }

  private removeSubjects(tag: Tag) {
    // Remove "subjects" from tag
    const clone = Object.assign({}, tag);
    clone.subjects = [];
    if (clone.parent !== null) {
      clone.parent.subjects = [];
    }

    return clone;
  }

  public deleteTag(tag: Tag) {
    return this.httpClient.delete(`${this.baseUrl}/web/${this.apiVersion}/Tag/${tag.id}`);
  }
}
