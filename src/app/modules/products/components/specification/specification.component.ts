import {Component} from "@angular/core";

export interface Specification {
  spec: string;
  value: string;
}


@Component({
  selector: 'product-specification-component',
  styleUrls: ['./specification.component.scss'],
  templateUrl: './specification.component.html'
})
export class SpecificationComponent {
  specifications: Specification [] = [
    {
      spec: 'Category',
      value: 'T-shirt'
    },
    {
      spec: 'Brand',
      value: 'Tommy Hilfiger'
    },
    {
      spec: 'Color',
      value: 'Blue'
    },
    {
      spec: 'Material',
      value: 'Cotton'
    },
    {
      spec: 'Weight',
      value: '140 Gram'
    }
  ];

  details: string [] = ['Machine Wash', 'Fit Type: Regular', '100% Cotton', 'Long sleeve']

}
