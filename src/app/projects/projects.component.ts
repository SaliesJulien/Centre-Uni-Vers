import { Component, OnInit } from '@angular/core';
import { projects } from '../text/text.translation';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  rpgTitle: string = projects.rpg.title;
  rpgDesc: string = projects.rpg.desc;

  imageCompTitle: string = projects.imageComp.title;
  imageCompDesc: string = projects.imageComp.desc;

  ftpTitle: string = projects.ftp.title;
  ftpDesc: string = projects.ftp.desc;

  tradeTitle: string = projects.trade.title;
  tradeDesc: string = projects.trade.desc;

  arcadeTitle: string = projects.arcade.title;
  arcadeDesc: string = projects.arcade.desc;

  jamTitle: string = projects.jam.title;
  jamDesc: string = projects.jam.desc;

  source: string = projects.source;
  ngOnInit(): void {
  }

}
