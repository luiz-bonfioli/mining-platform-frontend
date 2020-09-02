import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapViewerComponent } from './map-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: MapViewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapViewerRoutingModule { }
