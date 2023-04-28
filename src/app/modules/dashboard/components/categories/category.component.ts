import {Component} from "@angular/core";

export interface Category {
  category: string;
  value: number;
}

@Component({
  selector: 'categories-component',
  styleUrls: ['./category.component.scss'],
  templateUrl: './category.component.html'
})
export class CategoryComponent {
  categories: Category[] = [
    {
      category: 'Mobile & Accessories',
      value: 1024,
    },
    {
      category: 'Desktop',
      value: 6256,
    },
    {
      category: 'Electronics',
      value: 6024,
    },
    {
      category: 'Home & Furniture',
      value: 5409,
    },
    {
      category: 'Grocery',
      value: 3456,
    },
    {
      category: 'Fashion',
      value: 2298,
    },
    {
      category: 'Appliances',
      value: 921
    },
    {
      category: 'Beauty, Toys & More',
      value: 856
    },
    {
      category: 'Food & Drinks',
      value: 356
    },
    {
      category: 'Toys & Games',
      value: 67
    }
  ];
}
