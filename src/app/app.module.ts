import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebcamComponent } from './webcam/webcam.component';
import { LoadImageWithLoaderComponent } from './load-image-with-loader/load-image-with-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    WebcamComponent,
    LoadImageWithLoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/webcam'}],
  // providers: [{provide: APP_BASE_HREF, useValue: '/webcam/webcam'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
