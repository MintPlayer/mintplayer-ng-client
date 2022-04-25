import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MINTPLAYER_BASE_URL } from '../../providers/mintplayer-base-url.provider';
import { MINTPLAYER_API_VERSION } from '../../providers/mintplayer-api-version.provider';
import { BlogPost } from '../../entities/blog/blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private httpClient: HttpClient, @Inject(MINTPLAYER_BASE_URL) private baseUrl: string, @Inject(MINTPLAYER_API_VERSION) private apiVersion: string) {
  }

  public getBlogPosts() {
    return this.httpClient.get<BlogPost[]>(`${this.baseUrl}/web/${this.apiVersion}/blogpost`);
  }

  public getBlogPost(id: number) {
    return this.httpClient.get<BlogPost>(`${this.baseUrl}/web/${this.apiVersion}/blogpost/${id}`);
  }

  public createBlogPost(blogPost: BlogPost) {
    return this.httpClient.post<BlogPost>(`${this.baseUrl}/web/${this.apiVersion}/blogpost`, blogPost);
  }

  public updateBlogPost(blogPost: BlogPost) {
    return this.httpClient.put<BlogPost>(`${this.baseUrl}/web/${this.apiVersion}/blogpost/${blogPost.id}`, blogPost);
  }

  public deleteBlogPost(blogPost: BlogPost) {
    return this.httpClient.delete(`${this.baseUrl}/web/${this.apiVersion}/blogpost/${blogPost.id}`);
  }

}
