import { Component, OnInit } from '@angular/core';
import { home, language } from '../text/text.translation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string = home.name;
  subtitle: string = home.subtitle;
  presentation: string = home.presentation;
  competences: string = home.competences;
  languages = [language.angular,
    language.web,
    language.haskell,
    language.asm,
    language.c,
    language.cpp,
    language.pyhton];
  experiences: string = home.experiences.title;
  experience: string = home.experiences.experience;
  internship: string = home.experiences.internship;
  internshipDesc: string = home.experiences.internshipDesc;
  job: string = home.experiences.job;
  jobDesc: string = home.experiences.jobDesc
  jobTask = [home.experiences.jobTask.phone,
    home.experiences.jobTask.rdv,
    home.experiences.jobTask.virements,
    home.experiences.jobTask.moneyInc,
    home.experiences.jobTask.money,
    home.experiences.jobTask.chest,
  ];
  personnality: string = home.myself.title;
  personnalityDesc: string = home.myself.desc
  sports = [home.myself.Sports.alpinisme,
    home.myself.Sports.vtt,
    home.myself.Sports.climb,
    home.myself.Sports.skate,
    home.myself.Sports.canyoning,
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
