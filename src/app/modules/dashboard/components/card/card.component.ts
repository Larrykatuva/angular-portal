import {Component, Input, OnInit} from "@angular/core";


@Component({
  selector: 'card-component',
  styleUrls: ['./card.component.scss'],
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  @Input() title!: string;
  @Input() percent!: string;
  @Input() percentIcon!: string;
  @Input() value!: string;
  @Input() linkText!: string;
  @Input() linkValue!: string;
  @Input() cardIcon!: string;
  @Input() theme!: string;
  @Input() themeBg!: string;

  ngOnInit() {
  }
}
