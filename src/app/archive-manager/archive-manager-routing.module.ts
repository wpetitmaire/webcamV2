import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchiveDayComponent } from './archive-day/archive-day.component';

import { ArchiveManagerComponent } from './archive-manager.component';
import { ArchiveMonthComponent } from './archive-month/archive-month.component';
import { ArchiveYearComponent } from './archive-year/archive-year.component';

const routes: Routes = [
  { path: '', component: ArchiveManagerComponent },
  { path: ':year', component: ArchiveYearComponent },
  { path: ':year/:month', component: ArchiveMonthComponent },
  { path: ':year/:month/:day', component: ArchiveDayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchiveManagerRoutingModule { }
