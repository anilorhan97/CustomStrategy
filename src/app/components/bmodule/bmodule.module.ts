import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BModuleRoutingModule } from './bmodule-routing.module';
import { FirstBComponentComponent } from './first-bcomponent/first-bcomponent.component';
import { SecondBComponentComponent } from './second-bcomponent/second-bcomponent.component';


@NgModule({
  declarations: [
    FirstBComponentComponent,
    SecondBComponentComponent
  ],
  imports: [
    CommonModule,
    BModuleRoutingModule
  ]
})
export class BModuleModule { }
