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
import {OrderComponent} from "./components/orders/order.component";
import {StoreComponent} from "./components/store/store.component";
import {StoreChartComponent} from "./components/store-chart/storeChart.component";
import {ActivityComponent} from "./components/activity/activity.component";
import {CategoryComponent} from "./components/categories/category.component";
import {ReviewComponent} from "./components/reviews/review.component";
import {CustomerReviewComponent} from "./components/customer-reviews/customer-review.component";


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
    SalesComponent,
    OrderComponent,
    StoreComponent,
    StoreChartComponent,
    ActivityComponent,
    CategoryComponent,
    ReviewComponent,
    CustomerReviewComponent
  ],
  imports: [DashboardRoutingModule, MatIconModule, CommonModule, NgApexchartsModule, MatTableModule],
})
export class DashboardModule {}
