import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  home: Boolean = false;
  contact: Boolean = false;
  therapeutes: Boolean = false;
  conferences: Boolean = false;
  presentation: Boolean = false;
  location: Boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.home = true;
  }

  Home() {
    this.router.navigate(['/accueil']);
    this.home = true;
    this.contact = false;
    this.therapeutes = false;
    this.conferences = false;
    this.presentation = false;
    this.location = false;
  }

  Projects() {
    this.router.navigate(['/equipe']);
    this.home = false;
    this.contact = false;
    this.therapeutes = true;
    this.conferences = false;
    this.presentation = false;
    this.location = false;
  }

  Contact() {
    this.router.navigate(['/contact']);
    this.home = false;
    this.contact = true;
    this.therapeutes = false;
    this.conferences = false;
    this.presentation = false;
    this.location = false;
  }

  Conferences() {
    this.router.navigate(['/conferences']);
    this.home = false;
    this.contact = false;
    this.therapeutes = false;
    this.conferences = true;
    this.presentation = false;
    this.location = false;
  }

  Presentation() {
    this.router.navigate(['/presentation']);
    this.home = false;
    this.contact = false;
    this.therapeutes = false;
    this.conferences = false;
    this.presentation = true;
    this.location = false;
  }

  Location() {
    this.router.navigate(['/location']);
    this.home = false;
    this.contact = false;
    this.therapeutes = false;
    this.conferences = false;
    this.location = true;
    this.presentation = false;
  }

}
