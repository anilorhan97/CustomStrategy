import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstBComponentComponent } from './first-bcomponent/first-bcomponent.component';
import { SecondBComponentComponent } from './second-bcomponent/second-bcomponent.component';

const routes: Routes = [
  {path: "first-b", component : FirstBComponentComponent},
  {path: "second-b", component : SecondBComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BModuleRoutingModule { }
