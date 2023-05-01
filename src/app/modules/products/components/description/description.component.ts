import {Component} from "@angular/core";


@Component({
  selector: 'product-description-component',
  styleUrls: ['./description.component.scss'],
  templateUrl: './description.component.html'
})
export class DescriptionComponent {
  features: string [] = ['Full Sleeve', 'Full Sleeve', 'All Sizes available', '4 Different Color']
  services: string [] = ['10 Days Replacement', 'Cash on Delivery available']
}
