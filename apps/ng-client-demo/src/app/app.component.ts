import { Component, OnInit } from '@angular/core';
import { Artist, ArtistService } from '@mintplayer/ng-client';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'mintplayer-ng-client-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  constructor(private artistService: ArtistService) {
  }

  title = 'ng-client-demo';
  artists$ = new BehaviorSubject<Artist[]>([]);

  ngOnInit() {
    this.artistService.getArtists(false).subscribe((artists) => {
      this.artists$.next(artists);
    });
  }
}
