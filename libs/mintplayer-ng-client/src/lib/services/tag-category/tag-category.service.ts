import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginationRequest, PaginationResponse } from '@mintplayer/pagination';
import { MINTPLAYER_BASE_URL } from '../../providers/mintplayer-base-url.provider';
import { MINTPLAYER_API_VERSION } from '../../providers/mintplayer-api-version.provider';
import { TagCategory } from '../../entities/tags/tag-category';

@Injectable({
  providedIn: 'root'
})
export class TagCategoryService {
  constructor(private httpClient: HttpClient, @Inject(MINTPLAYER_BASE_URL) private baseUrl: string, @Inject(MINTPLAYER_API_VERSION) private apiVersion: string) {
  }

  public pageTagCategories(request: PaginationRequest) {
    return this.httpClient.post<PaginationResponse<TagCategory>>(`${this.baseUrl}/web/${this.apiVersion}/TagCategory/page`, request);
  }

  public getTagCategories(include_relations: boolean) {
    return this.httpClient.get<TagCategory[]>(`${this.baseUrl}/web/${this.apiVersion}/TagCategory`, {
      headers: {
        'include_relations': String(include_relations)
      }
    });
  }

  public getTagCategory(id: number, include_relations: boolean) {
    return this.httpClient.get<TagCategory>(`${this.baseUrl}/web/${this.apiVersion}/TagCategory/${id}`, {
      headers: {
        'include_relations': String(include_relations)
      }
    });
  }

  public createTagCategory(tagCategory: TagCategory) {
    return this.httpClient.post<TagCategory>(`${this.baseUrl}/web/${this.apiVersion}/TagCategory`, tagCategory);
  }

  public updateTagCategory(tagCategory: TagCategory) {
    return this.httpClient.put<TagCategory>(`${this.baseUrl}/web/${this.apiVersion}/TagCategory/${tagCategory.id}`, tagCategory);
  }

  public deleteTagCategory(tagCategory: TagCategory) {
    return this.httpClient.delete(`${this.baseUrl}/web/${this.apiVersion}/TagCategory/${tagCategory.id}`);
  }
}
