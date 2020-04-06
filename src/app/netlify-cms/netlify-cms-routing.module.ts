import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetlifyCMSComponent } from './netlify-cms.component';

const routes: Routes = [{ path: '', component: NetlifyCMSComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetlifyCMSRoutingModule { }
