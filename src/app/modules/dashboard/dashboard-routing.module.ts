import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {OrganizerComponent} from "./organizer/organizer.component";


const routes: Routes = [
  { path: '', component: OrganizerComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
