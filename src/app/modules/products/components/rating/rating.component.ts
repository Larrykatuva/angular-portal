import {Component} from "@angular/core";

export interface Rating {
  value: number;
  percentage: number;
  total: number;
}


@Component({
  selector: 'product-rating-component',
  styleUrls: ['./rating.component.scss'],
  templateUrl: './rating.component.html'
})
export class RatingComponent {
  ratings: Rating [] = [
    {
      value: 5,
      percentage: 90,
      total: 3090
    },
    {
      value: 5,
      percentage: 71,
      total: 3011
    },
    {
      value: 4,
      percentage: 63,
      total: 2693
    },
    {
      value: 3,
      percentage: 47,
      total: 1934
    },
    {
      value: 2,
      percentage: 23,
      total: 546
    }
  ]

  getProgressProps(value: number): string {
    if (value >= 70) return `bg-[-#58b49c]`;
    if (value >= 50 && value < 70) return `bg-[#58b49c]`;
    if (value >= 30 && value < 50) return `bg-[#f7b84b]`;
    return `bg-[#ec6447]`;
  }

  getProgressLength(value: number): string {
    return `width: ${value}%`;
  }
}
