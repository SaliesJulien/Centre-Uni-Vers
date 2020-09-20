import { Component, OnInit } from '@angular/core';
import { presentation } from '../text/presentation';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

    title: string = presentation.title
    description: string = presentation.description
    constructor() { }

    ngOnInit(): void {
    }

}
