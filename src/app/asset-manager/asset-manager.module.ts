import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetManagerRoutingModule } from './asset-manager-routing.module';
import { AssetManagerComponent } from './asset-manager.component';

@NgModule({
  declarations: [AssetManagerComponent],
  imports: [
    CommonModule,
    AssetManagerRoutingModule
  ]
})
export class AssetManagerModule { }
