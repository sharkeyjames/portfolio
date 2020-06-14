import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetlifyCMSRoutingModule } from './netlify-cms-routing.module';
import { NetlifyCMSComponent } from './netlify-cms.component';


@NgModule({
  declarations: [NetlifyCMSComponent],
  imports: [
    CommonModule,
    NetlifyCMSRoutingModule
  ]
})
export class NetlifyCMSModule { }
