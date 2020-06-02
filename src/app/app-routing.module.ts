import { AboutComponent } from './about/about.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlagfetchComponent } from './flagfetch/flagfetch.component';
import { FlagInfoComponent } from './flag-info/flag-info.component';


const routes: Routes = [
  {
    path:'',
    component: FlagfetchComponent
  },
  {
    path:'flag/:id',
    component:FlagInfoComponent
  },
  {
    path:'about',
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
