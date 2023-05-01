import {NgModule} from "@angular/core";
import {ProductsRoutingModule} from "./products-routing.module";
import {DetailsComponent} from "./details/details.component";
import {HeaderComponent} from "./components/header/header.component";
import {MatIconModule} from "@angular/material/icon";
import {MetadataComponent} from "./components/metadata/metadata.component";
import {CommonModule} from "@angular/common";
import {DescriptionComponent} from "./components/description/description.component";
import {SpecificationComponent} from "./components/specification/specification.component";
import {MatTabsModule} from "@angular/material/tabs";
import {RatingComponent} from "./components/rating/rating.component";


@NgModule({
  declarations: [
    DetailsComponent,
    HeaderComponent,
    MetadataComponent,
    DescriptionComponent,
    SpecificationComponent,
    RatingComponent
  ],
  imports: [ProductsRoutingModule, MatIconModule, CommonModule, MatTabsModule]
})
export class ProductsModule {}
