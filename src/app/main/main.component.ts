import { Component, OnInit } from '@angular/core';
import { AppConfiguration, Languages } from '../app.configuration';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public AppConfiguration = AppConfiguration;
  public Languages = Languages;
  public hideToolbar = false;
  public isFilterOpen = false;

  // public menuList = AppConfiguration.menuActiveMap;

  constructor() { }

  ngOnInit() {
  }

  onMenuOpened() {

  }
  selectMenu(item) {

  }

}
