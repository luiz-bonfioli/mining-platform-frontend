import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialListComponent } from './material-list/material-list.component';
import { MaterialDetailComponent } from './material-detail/material-detail.component';

const routes: Routes = [
	{
	  path: 'list',
	  component: MaterialListComponent
	},
  
	{
	  path: '',
	  component: MaterialDetailComponent
	},
  
	{
	  path: ':id',
	  component: MaterialDetailComponent
	}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
