import {Component, OnInit} from "@angular/core";


export interface progressContent {
  title: string;
  value: number;
}


@Component({
  selector: 'location-component',
  styleUrls: ['./location.component.scss'],
  templateUrl: './location.component.html'
})
export class LocationComponent implements OnInit{
  contents: progressContent[] = [
    {
      title: 'Canada',
      value: 30,
    },
    {
      title: 'Greenland',
      value: 76,
    },
    {
      title: 'Russia',
      value: 45,
    }
  ]
  ngOnInit(): void {
  }

}
