import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MINTPLAYER_API_VERSION, MINTPLAYER_BASE_URL } from '@mintplayer/ng-client';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    { provide: MINTPLAYER_BASE_URL, useValue: 'https://mintplayer.com' },
    { provide: MINTPLAYER_API_VERSION, useValue: 'v3' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
