import {NgModule} from "@angular/core";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {OrganizerComponent} from "./organizer/organizer.component";
import {TopbarComponent} from "./components/topbar/topbar.component";
import {GreetingComponent} from "./components/greeting/greeting.component";
import {MatIconModule} from "@angular/material/icon";
import {CardComponent} from "./components/card/card.component";
import {CommonModule} from "@angular/common";
import {RevenueComponent} from "./components/revenue/revenue.component";
import {RevenueChartComponent} from "./components/revenue-chart/revenue-chart.component";
import {NgApexchartsModule} from "ng-apexcharts";
import {LocationComponent} from "./components/location/location.component";
import {ProgressBarComponent} from "./components/progess-bar/progressBar.component";
import {SalesComponent} from "./components/sales/sales.component";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    OrganizerComponent,
    TopbarComponent,
    GreetingComponent,
    CardComponent,
    RevenueComponent,
    RevenueChartComponent,
    LocationComponent,
    ProgressBarComponent,
    SalesComponent
  ],
  imports: [DashboardRoutingModule, MatIconModule, CommonModule, NgApexchartsModule, MatTableModule],
})
export class DashboardModule {}
