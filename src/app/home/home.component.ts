import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { home } from '../text/text.translation';
declare var anime: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig],
})
export class HomeComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => 'src/assets/$n.jpg');


  name: string = home.name;
  subtitle: string = home.subtitle;
  presentation: string = home.presentation;
  competences: string = home.competences;
  experiences: string = home.presText.title;
  about = [home.presText.about.about1,
    home.presText.about.about2
  ];
  constructor(config: NgbCarouselConfig) { }

    ngOnInit(): void {
    }

    // tslint:disable-next-line:use-lifecycle-interface
    ngAfterViewInit(): void {
    // Wrap every letter in a span
    const textWrapper = document.querySelector('.title');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, '<span class=\'letter\'>$&</span>');

    anime.timeline({loop: true})
    .add({
        targets: '.title .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 950,
        delay: (el, i) => 70 * i
    }).add({
        targets: '.title',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 2000
    });
  }
}
