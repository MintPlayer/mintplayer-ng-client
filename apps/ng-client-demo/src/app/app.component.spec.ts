import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ArtistService } from '@mintplayer/ng-client';
import { of } from 'rxjs';
import { AppComponent } from './app.component';

interface ArtistMock {
  name: string;
  yearStarted: number;
  yearQuit: number;

  text: string;
}

@Injectable({ providedIn: 'root' })
class ArtistMockService {
  getArtists() {
    return of<ArtistMock[]>([]);
  }
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{
        provide: ArtistService,
        useClass: ArtistMockService
      }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-client-demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ng-client-demo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome to ng-client-demo!'
    );
  });
});
