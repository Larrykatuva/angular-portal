import {Component, Input} from "@angular/core";


@Component({
  selector: 'progress-bar-component',
  styleUrls: ['./progressBar.component.scss'],
  templateUrl: './progressBar.component.html'
})
export class ProgressBarComponent {
  @Input() title!: string;
  @Input() value!: number;

  getProgressLength(value: number): string {
    return `width: ${value}%`;
  }
}
