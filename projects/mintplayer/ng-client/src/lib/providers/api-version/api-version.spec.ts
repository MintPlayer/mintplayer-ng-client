import { TestBed } from '@angular/core/testing';
import { API_VERSION } from './api-version';

const testVersion: string = 'v2';

describe('ApiVersion', () => {
  let apiVersion: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: API_VERSION,
        useValue: testVersion
      }]
    });
    apiVersion = TestBed.inject(API_VERSION);
  });

  it('should be created', () => {
    expect(apiVersion).toBeTruthy();
    expect(apiVersion).toBe(testVersion);
  });
});
