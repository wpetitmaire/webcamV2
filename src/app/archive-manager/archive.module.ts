import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import { FormsModule }   from '@angular/forms';

import { ArchiveComponent } from './archive-manager/archive-manager.component';
import { DialogComponent } from './dialog/dialog.component'

import localeFr from '@angular/common/locales/fr';
import { MatNativeDateModule } from '@angular/material/core';
import { CardHighlightDirective } from './archive-manager/card-highlight.directive';
import { ArchiveYearComponent } from './archive-year/archive-year.component';
import { ArchiveMonthComponent } from './archive-month/archive-month.component';
import { ArchiveDayComponent } from './archive-day/archive-day.component';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    ArchiveComponent,
    DialogComponent,
    CardHighlightDirective,
    ArchiveYearComponent,
    ArchiveMonthComponent,
    ArchiveDayComponent
  ],
  imports: [
    CommonModule,

    FormsModule,

    // Imports Material
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class ArchiveModule { }
