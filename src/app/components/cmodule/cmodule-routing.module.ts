import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstCComponentComponent } from './first-ccomponent/first-ccomponent.component';
import { SecondCComponentComponent } from './second-ccomponent/second-ccomponent.component';

const routes: Routes = [
  {path: "first-c", component : FirstCComponentComponent},
  {path: "second-c", component : SecondCComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CModuleRoutingModule { }
