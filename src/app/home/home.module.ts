import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ListComponent } from '../components/list/list.component';
import { CardComponent } from '../components/card/card.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
