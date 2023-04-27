import {NgModule} from "@angular/core";
import {LayoutsRoutingModule} from "./layouts-routing.module";
import {MainComponent} from "./main/main.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {NavbarComponent} from "./navbar/navbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [MainComponent, NavbarComponent, SidebarComponent],
  imports: [LayoutsRoutingModule, MatSidenavModule, MatListModule, MatCardModule, MatExpansionModule, MatIconModule, MatToolbarModule, CommonModule]
})
export class LayoutsModule {}
