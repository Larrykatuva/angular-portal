import {Component, OnInit} from "@angular/core";

interface cardDetail {
  title: string;
  percent: string;
  percentIcon: string;
  value: string;
  linkText: string;
  linkValue: string;
  cardIcon: string;
  theme: string;
  themeBg: string;
}


@Component({
  selector: 'organizer-dashboard',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {
  cardDetails: cardDetail[] = [
    {
      title: 'Total Earnings',
      percent: '+ 16.24',
      percentIcon: 'north_east',
      value: '$559.25K',
      linkText: 'View earnings',
      linkValue: '123',
      cardIcon: 'paid',
      theme: 'text-[#59b59c]',
      themeBg: 'bg-[#d3f1ed]',
    },
    {
      title: 'ORDERS',
      percent: '- 3.7 %',
      percentIcon: 'south_east',
      value: '36894',
      linkText: 'View orders',
      linkValue: '123',
      cardIcon: 'shopping_bag',
      theme: 'text-[#329cdb]',
      themeBg: 'bg-[#d8edf9]',
    },
    {
      title: 'CUSTOMERS',
      percent: '+ 29.08',
      percentIcon: 'north_east',
      value: '183.35M',
      linkText: 'See details',
      linkValue: '123',
      cardIcon: 'account_circle',
      theme: 'text-[#f8b94b]',
      themeBg: 'bg-[#fef2df]',
    },
    {
      title: 'My Balance',
      percent: '+ 0.00 %',
      percentIcon: '',
      value: '$165.89K',
      linkText: 'Withdraw money',
      linkValue: '123',
      cardIcon: 'account_balance_wallet',
      theme: 'text-[#546396]',
      themeBg: 'bg-[#dde0ea]',
    }
  ]
  ngOnInit() {
  }
}
