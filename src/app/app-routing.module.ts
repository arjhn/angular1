import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlagfetchComponent } from './flagfetch/flagfetch.component';


const routes: Routes = [
  {
    path:'',
    component: FlagfetchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
