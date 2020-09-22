import { Component, OnInit } from '@angular/core';
import { projects } from '../text/text.translation';

@Component({
  selector: 'app-projects',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  constructor() { }

  rpgTitle: string = projects.doctor1.title;
  rpgDesc: string = projects.doctor1.desc;

  imageCompTitle: string = projects.doctor2.title;
  imageCompDesc: string = projects.doctor2.desc;

  ftpTitle: string = projects.doctor3.title;
  ftpDesc: string = projects.doctor3.desc;

  tradeTitle: string = projects.doctor4.title;
  tradeDesc: string = projects.doctor4.desc;

  arcadeTitle: string = projects.doctor5.title;
  arcadeDesc: string = projects.doctor5.desc;

  jamTitle: string = projects.doctor6.title;
  jamDesc: string = projects.doctor6.desc;

  doctor7Name: string = projects.doctor7.title;
  doctor7Desc: string = projects.doctor7.desc;
  doctor8Name: string = projects.doctor8.title;
  doctor8Desc: string = projects.doctor8.desc;
  doctor9Name: string = projects.doctor9.title;
  doctor9Desc: string = projects.doctor9.desc;
  doctor10Name: string = projects.doctor10.title;
  doctor10Desc: string = projects.doctor10.desc;
  doctor11Name: string = projects.doctor11.title;
  doctor11Desc: string = projects.doctor11.desc;
  doctor12Name: string = projects.doctor12.title;
  doctor12Desc: string = projects.doctor12.desc;

  source: string = projects.source;
  ngOnInit(): void {
  }

}
