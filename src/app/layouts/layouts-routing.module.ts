import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  { path: '', component: MainComponent, children: [
      { path: '', loadChildren: () => import('../modules/dashboard/dashboard.module').then(module => module.DashboardModule)},
      { path: 'products', loadChildren: () => import('../modules/products/products.module').then(module => module.ProductsModule)},
      { path: 'apps', loadChildren: () => import('../modules/developer/developer.module').then(module => module.DeveloperModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule {}
