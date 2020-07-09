import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { contact } from '../text/text.translation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  description: string = contact.desc;
  title: string = contact.title;
  ngOnInit(): void {
  }

}
