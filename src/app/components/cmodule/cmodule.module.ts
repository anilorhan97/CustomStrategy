import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CModuleRoutingModule } from './cmodule-routing.module';
import { FirstCComponentComponent } from './first-ccomponent/first-ccomponent.component';
import { SecondCComponentComponent } from './second-ccomponent/second-ccomponent.component';


@NgModule({
  declarations: [
    FirstCComponentComponent,
    SecondCComponentComponent
  ],
  imports: [
    CommonModule,
    CModuleRoutingModule
  ]
})
export class CModuleModule { }
