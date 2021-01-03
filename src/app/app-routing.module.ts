import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebcamComponent } from './webcam/webcam.component';


const routes: Routes = [
  { path: '', component: WebcamComponent },
  { path: 'archives', loadChildren: () => import('./archive-manager/archive-manager.module').then(m => m.ArchiveManagerModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
