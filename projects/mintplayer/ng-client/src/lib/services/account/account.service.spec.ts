import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AccountService } from './account.service';
import { BASE_URL } from '@mintplayer/ng-base-url';
import { API_VERSION } from '../../providers';

describe('AccountService', () => {
  let accountService: AccountService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: BASE_URL, useValue: 'http://localhost' },
        { provide: API_VERSION, useValue: 'v3' }
      ]
    });

    accountService = TestBed.inject(AccountService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(accountService).toBeTruthy();
  });

  describe('GetProviders', () => {
    it('should return a list of OAuth providers', () => {
      const dummyProviders: string[] = [
        'facebook',
        'twitter',
        'github',
        'microsoft'
      ];

      accountService.getProviders().then(providers => {
        expect(providers.length).toBe(4);
        expect(providers).toEqual(dummyProviders);
      });
      
      // We expect that this should have sent the following request
      const request = httpController.expectOne('http://localhost/web/v3/account/providers');
      expect(request.request.method).toBe('GET');
      // Send response
      request.flush(dummyProviders);
    })
  });
});
