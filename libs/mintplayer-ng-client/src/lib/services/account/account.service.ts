import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResult } from '../../entities/auth/login-result';
import { User } from '../../entities/auth/user';
import { UserData } from '../../entities/auth/user-data';
import { MINTPLAYER_BASE_URL } from '../../providers/mintplayer-base-url.provider';
import { MINTPLAYER_API_VERSION } from '../../providers/mintplayer-api-version.provider';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient, @Inject(MINTPLAYER_BASE_URL) private baseUrl: string, @Inject(MINTPLAYER_API_VERSION) private apiVersion: string) {
  }

  public register(data: UserData) {
    return this.httpClient.post(`${this.baseUrl}/web/${this.apiVersion}/Account/register`, data);
  }
  public resendConfirmationEmail(email: string) {
    return this.httpClient.post(`${this.baseUrl}/web/${this.apiVersion}/Account/verify/resend`, { email });
  }
  public login(email: string, password: string) {
    return this.httpClient.post<LoginResult>(`${this.baseUrl}/web/${this.apiVersion}/Account/login`, { email, password });
  }
  public getProviders() {
    return this.httpClient.get<string[]>(`${this.baseUrl}/web/${this.apiVersion}/account/providers`);
  }
  public getLogins() {
    return this.httpClient.get<string[]>(`${this.baseUrl}/web/${this.apiVersion}/account/logins`);
  }
  public removeLogin(provider: string) {
    return this.httpClient.delete(`${this.baseUrl}/web/${this.apiVersion}/account/logins/${provider}`);
  }
  public currentUser() {
    return this.httpClient.get<User>(`${this.baseUrl}/web/${this.apiVersion}/Account/current-user`);
  }
  public hasPassword() {
    return this.httpClient.get<boolean>(`${this.baseUrl}/web/${this.apiVersion}/Account/password`);
  }
  public updatePassword(currentPassword: string, newPassword: string, confirmation: string) {
    return this.httpClient.put(`${this.baseUrl}/web/${this.apiVersion}/Account/password`, {
      currentPassword, newPassword, confirmation
    });
  }
  public setBypass2faForExternalLogin(setupCode: string, bypass2faForExternalLogins: boolean) {
    return this.httpClient.put(`${this.baseUrl}/web/${this.apiVersion}/Account/two-factor-bypass`, {
      setupCode, bypass2faForExternalLogins
    });
  }
  public currentRoles() {
    return this.httpClient.get<string[]>(`${this.baseUrl}/web/${this.apiVersion}/Account/roles`);
  }
  public logout() {
    return this.httpClient.post(`${this.baseUrl}/web/${this.apiVersion}/Account/logout`, {});
  }
  public csrfRefresh() {
    return this.httpClient.post(`${this.baseUrl}/web/${this.apiVersion}/Account/csrf-refresh`, {});
  }

}
