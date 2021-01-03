import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchiveManagerComponent } from './archive-manager.component';
import { ArchiveYearComponent } from './archive-year/archive-year.component';

const routes: Routes = [
  { path: '', component: ArchiveManagerComponent },
  { path: ':year', component: ArchiveYearComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchiveManagerRoutingModule { }
