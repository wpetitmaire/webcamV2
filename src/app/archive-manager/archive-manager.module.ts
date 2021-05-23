import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchiveManagerRoutingModule } from './archive-manager-routing.module';
import { ArchiveManagerComponent } from './archive-manager.component';
import { ArchiveYearComponent } from './archive-year/archive-year.component';

import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { CardHighlightDirective } from './card-highlight.directive';
import { ArchiveMonthComponent } from './archive-month/archive-month.component';
import { ArchiveDayComponent } from './archive-day/archive-day.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { AppModule } from '../app.module';
import { SpinnerModule } from '../spinner/spinner.module';





@NgModule({
  declarations: [
    // SpinnerComponent,
    ArchiveManagerComponent, 
    ArchiveYearComponent, 
    CardHighlightDirective, 
    ArchiveMonthComponent, 
    ArchiveDayComponent
  ],
  imports: [
    CommonModule,

    // Imports Material
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,


    ArchiveManagerRoutingModule,
    SpinnerModule
  ]
})
export class ArchiveManagerModule { }
