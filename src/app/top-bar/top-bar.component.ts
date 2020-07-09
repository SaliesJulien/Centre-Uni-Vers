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
  projects: Boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.home = true;
  }

  Home() {
    this.router.navigate(['/home']);
    this.home = true;
    this.contact = false;
    this.projects = false;
  }

  Projects() {
    this.router.navigate(['/projects']);
    this.home = false;
    this.contact = false;
    this.projects = true;
  }

  Contact() {
    this.router.navigate(['/contact']);
    this.home = false;
    this.contact = true;
    this.projects = false;
  }

}
