import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: LocationListComponent
  },

  {
    path: '',
    component: LocationDetailComponent
  },

  {
    path: ':id',
    component: LocationDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
