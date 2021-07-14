import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '@mintplayer/ng-base-url';
import { API_VERSION } from '../../providers';
import { LoginResult, User, UserData } from '../../entities';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient, @Inject(BASE_URL) private baseUrl: string, @Inject(API_VERSION) private apiVersion: string) {
  }

  public register(data: UserData) {
    return this.httpClient.post(`${this.baseUrl}/web/${this.apiVersion}/Account/register`, data).toPromise();
  }
  public login(email: string, password: string) {
    return this.httpClient.post<LoginResult>(`${this.baseUrl}/web/${this.apiVersion}/Account/login`, { email, password }).toPromise();
  }
  public getProviders() {
    return this.httpClient.get<string[]>(`${this.baseUrl}/web/${this.apiVersion}/account/providers`).toPromise();
  }
  public getLogins() {
    return this.httpClient.get<string[]>(`${this.baseUrl}/web/${this.apiVersion}/account/logins`).toPromise();
  }
  public removeLogin(provider: string) {
    return this.httpClient.delete(`${this.baseUrl}/web/${this.apiVersion}/account/logins/${provider}`).toPromise();
  }
  public currentUser() {
    return this.httpClient.get<User>(`${this.baseUrl}/web/${this.apiVersion}/Account/current-user`).toPromise();
  }
  public hasPassword() {
    return this.httpClient.get<boolean>(`${this.baseUrl}/web/${this.apiVersion}/Account/has-password`).toPromise();
  }
  public currentRoles() {
    return this.httpClient.get<string[]>(`${this.baseUrl}/web/${this.apiVersion}/Account/roles`).toPromise();
  }
  public logout() {
    return this.httpClient.post(`${this.baseUrl}/web/${this.apiVersion}/Account/logout`, {}).toPromise();
  }

}
