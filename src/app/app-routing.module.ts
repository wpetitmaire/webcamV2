import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebcamComponent } from './webcam/webcam.component';
import { ArchiveComponent } from './archive/archive.component';


const routes: Routes = [
  { path: '', component: WebcamComponent },
  { path: 'archives', component: ArchiveComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
