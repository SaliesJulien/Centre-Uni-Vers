import { Component, OnInit } from '@angular/core';
import { location} from '../text/location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor() { }

  titleHeader: String = location.title;
  title: String = location.firstRoom.title;
  description: String = location.firstRoom.description;
  deskTitle: String = location.desk.title;
  deskDesc: String = location.desk.description;
  contactUs: String = location.contact
  ngOnInit(): void {
  }

}
