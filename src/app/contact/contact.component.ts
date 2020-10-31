import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { contact } from '../text/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  description: string = contact.desc;
  title: string = contact.title;
  byMail: String = contact.byMail;
  byPhone: String = contact.byPhone;
  phone: String = contact.phoneNumber;
  mail: String = contact.email;
  ngOnInit(): void {
  }

}
