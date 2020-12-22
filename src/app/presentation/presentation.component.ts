import { Component, OnInit } from '@angular/core';
import { presentation } from '../text/presentation';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

    title: string = presentation.title;
    description: string = presentation.description;


    slides = [{image: '../../assets/pres/IMG-1.jpg'},
              {image: '../../assets/pres/IMG-2.jpg'},
              {image: '../../assets/pres/IMG-3.jpg'},
              {image: '../../assets/pres/IMG-4.jpg'},
              {image: '../../assets/pres/IMG-5.jpg'},
              {image: '../../assets/pres/IMG-6.png'},
              {image: '../../assets/pres/IMG-7.png'}];

    constructor() { }

    ngOnInit(): void {
    }

}
