import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';

import { ArchiveComponent } from './archive.component';
import { DialogComponent } from './dialog/dialog.component'

@NgModule({
  declarations: [
    ArchiveComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,

    // Imports Material
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
  ]
})
export class ArchiveModule { }
