import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from "./modules/shared/shared.module";

const routes: Routes = [
  {path: '', loadChildren: () => import('./layouts/layouts.module').then(module => module.LayoutsModule)},
  {path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthModule)}
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
