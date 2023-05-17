import {Component, Input} from "@angular/core";


@Component({
  selector: 'developer-card-component',
  styleUrls: ['./card.component.scss'],
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() icon!: string;
  @Input() theme!: string;
  @Input() themeBg!: string;
  @Input() title!: string;
  @Input() value!: number;

  getThemeBg(themeBg: string): string {
    return `bg-[${themeBg}]`;
  }

  getTextTheme(theme: string): string {
    return `text-[${theme}]`
  }
}


