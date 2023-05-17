import {Component} from "@angular/core";

export interface PeriodicElement {
  orderId: string;
  customer: string;
  product: string;
  amount: string;
  vendor: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {orderId: "VZ2112", customer: 'Alex Smith', product: 'Clothes', amount: '$ 67.00', vendor: 'Zoetic Fashion', status: 'Paid'},
  {orderId: "VZ2112", customer: 'Alex Smith', product: 'Clothes', amount: '$ 67.00', vendor: 'Zoetic Fashion', status: 'Paid'},
  {orderId: "VZ2112", customer: 'Alex Smith', product: 'Clothes', amount: '$ 67.00', vendor: 'Zoetic Fashion', status: 'Paid'},
  {orderId: "VZ2112", customer: 'Alex Smith', product: 'Clothes', amount: '$ 67.00', vendor: 'Zoetic Fashion', status: 'Paid'},
  {orderId: "VZ2112", customer: 'Alex Smith', product: 'Clothes', amount: '$ 67.00', vendor: 'Zoetic Fashion', status: 'Paid'},
];

@Component({
  selector: 'app-table-component',
  styleUrls: ['./app-table.component.scss'],
  templateUrl: './app-table.component.html'
})
export class AppTableComponent {
  displayedColumns: string[] = ['orderId', 'customer', 'product', 'amount', 'vendor', 'status'];
  dataSource = ELEMENT_DATA;
}
