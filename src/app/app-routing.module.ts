import { NgModule } from '@angular/core';
import { PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { CustomPreloading } from './models/custom-preloading';

const routes: Routes = [
  {path : "a-module", loadChildren: () => import("../app/components/amodule/amodule.module").then(a => a.AModuleModule),
    data: { preload : true }
  },
  {path : "b-module", loadChildren: () => import("../app/components/bmodule/bmodule.module").then(a => a.BModuleModule), 
    data: { preload : true }
  },
  {path : "c-module", loadChildren: () => import("../app/components/cmodule/cmodule.module").then(a => a.CModuleModule),
    data: { preload : false } //Default false. Ön yükleme yapılmayacak. 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
