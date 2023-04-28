import {Component} from "@angular/core";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  amount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', amount: 20},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', amount: 20},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', amount: 20},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', amount: 20},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', amount: 20},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', amount: 20},
];

@Component({
  selector: 'sales-component',
  styleUrls: ['./sales.component.scss'],
  templateUrl: './sales.component.html'
})
export class SalesComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
