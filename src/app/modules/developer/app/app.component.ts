import {Component} from "@angular/core";

export interface CardInterface {
  icon: string,
  theme: string,
  themeBg: string,
  title: string,
  value: number,
}

export interface Scope {
  name: string;
  total: number;
  description?: string;
}

@Component({
  selector: 'developer-app-component',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  cardData: CardInterface[] = [
    {
      icon: 'task_alt',
      theme: '#58b49c',
      themeBg: '#d3f1ed',
      title: 'Active Apps',
      value: 24
    },
    {
      icon: 'report',
      theme: '#ec6447',
      themeBg: '#fae3de',
      title: 'Inactive Apps',
      value: 3
    },
    {
      icon: 'fitbit',
      theme: '#329cdb',
      themeBg: '#eff2f7',
      title: 'Registered Scopes',
      value: 15
    }
  ]

  scopes: Scope[] = [
    {
      name: 'Transaction',
      total: 3
    },
    {
      name: 'Organizer',
      total: 4
    },
    {
      name: 'Checkout',
      total: 2
    },
    {
      name: 'Support',
      total: 13,
    },
    {
      name: 'Integration',
      total: 27
    }
  ]
}
