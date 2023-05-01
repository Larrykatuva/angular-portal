import {Component, OnInit} from "@angular/core";

interface Metadata {
  value: string;
  desc: string;
  icon: string;
}

@Component({
  selector: 'metadata-component',
  styleUrls: ['./metadata.component.scss'],
  templateUrl: './metadata.component.html'
})
export class MetadataComponent implements OnInit{
  records: Metadata [] = [
    {
      value: 'price',
      desc: '$125,40',
      icon: 'paid',
    },
    {
      value: 'No. of Orders',
      desc: '2234',
      icon: 'difference',
    },
    {
      value: 'Available Stocks',
      desc: '1230',
      icon: 'inventory_2'
    },
    {
      value: 'Total Revenue',
      desc: '$60645',
      icon: 'inbox'
    },
  ]

  sizes: string [] = ['S', 'M', 'L', 'XL']
  colors: string [] = ['#4b5b90', '#3577f1', '#58b49c', '#329cdb', '#ec6447', '#212529']
  ngOnInit() {
  }

  generateColor(color: string): string {
    return `bg-[${color}]`
  }
}
