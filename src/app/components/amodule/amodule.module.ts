import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AModuleRoutingModule } from './amodule-routing.module';
import { FirstAComponentComponent } from './first-acomponent/first-acomponent.component';
import { SecondAComponentComponent } from './second-acomponent/second-acomponent.component';


@NgModule({
  declarations: [
    FirstAComponentComponent,
    SecondAComponentComponent
  ],
  imports: [
    CommonModule,
    AModuleRoutingModule
  ]
})
export class AModuleModule { }
