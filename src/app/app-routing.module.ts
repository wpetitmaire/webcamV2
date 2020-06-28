import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebcamComponent } from './webcam/webcam.component';


const routes: Routes = [
  { path: 'webcam', component: WebcamComponent },
  { path: '**', redirectTo: 'webcam' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
