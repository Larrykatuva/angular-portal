import {NgModule} from "@angular/core";
import {DeveloperRoutingModule} from "./developer-routing.module";
import {ScopeComponent} from "./scope/scope.component";
import {AppComponent} from "./app/app.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {CardComponent} from "./components/card/card.component";
import {CommonModule} from "@angular/common";
import {AppTableComponent} from "./components/app-table/app-table.component";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [ScopeComponent, AppComponent, CardComponent, AppTableComponent],
  imports: [DeveloperRoutingModule, MatIconModule, MatButtonModule, CommonModule, MatTableModule]
})
export class DeveloperModule {}
