import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstAComponentComponent } from './first-acomponent/first-acomponent.component';
import { SecondAComponentComponent } from './second-acomponent/second-acomponent.component';

const routes: Routes = [
  {path: "first-a", component : FirstAComponentComponent},
  {path: "second-a", component : SecondAComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AModuleRoutingModule { }
