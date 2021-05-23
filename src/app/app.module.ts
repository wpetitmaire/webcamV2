import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, APP_INITIALIZER } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MAT_DATE_LOCALE} from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { WebcamComponent } from './webcam/webcam.component';
import { LoadImageWithLoaderComponent } from './load-image-with-loader/load-image-with-loader.component';
import { ConfigurationHelperService } from './configuration-helper.service';
import { environment } from 'src/environments/environment';
import { SpinnerComponent } from './spinner/spinner.component';

// Déclaration de la fonction d'initialisation de la configuration
export function initConfig(configService: ConfigurationHelperService) {
  return () => configService.load(environment, 'webcam/src/assets/tsconfig.json');
}

@NgModule({
  declarations: [
    AppComponent,
    WebcamComponent,
    LoadImageWithLoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatProgressSpinnerModule,

  ],
  exports: [
  ],
  providers: [
    // { provide: APP_INITIALIZER, useFactory: initConfig, deps: [ConfigurationHelperService], multi: true },
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    { provide: APP_BASE_HREF, useValue: '/webcam' },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
