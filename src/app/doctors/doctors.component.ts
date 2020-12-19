import { Component, OnInit } from '@angular/core';
import { doctors } from '../text/text.translation';

@Component({
  selector: 'app-projects',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  constructor() { }

  doctor1Name: string = doctors.doctor1.title;
  doctor1Desc: string = doctors.doctor1.desc;
  doctor2Name: string = doctors.doctor2.title;
  doctor2Desc: string = doctors.doctor2.desc;
  doctor3Name: string = doctors.doctor3.title;
  doctor3Desc: string = doctors.doctor3.desc;
  doctor4Name: string = doctors.doctor4.title;
  doctor4Desc: string = doctors.doctor4.desc;
  doctor5Name: string = doctors.doctor5.title;
  doctor5Desc: string = doctors.doctor5.desc;
  doctor6Name: string = doctors.doctor6.title;
  doctor6Desc: string = doctors.doctor6.desc;
  doctor7Name: string = doctors.doctor7.title;
  doctor7Desc: string = doctors.doctor7.desc;
  doctor8Name: string = doctors.doctor8.title;
  doctor8Desc: string = doctors.doctor8.desc;
  doctor9Name: string = doctors.doctor9.title;
  doctor9Desc: string = doctors.doctor9.desc;
  doctor10Name: string = doctors.doctor10.title;
  doctor10Desc: string = doctors.doctor10.desc;
  doctor11Name: string = doctors.doctor11.title;
  doctor11Desc: string = doctors.doctor11.desc;
  doctor12Name: string = doctors.doctor12.title;
  doctor12Desc: string = doctors.doctor12.desc;

  source: string = doctors.source;
  ngOnInit(): void {
  }

}
