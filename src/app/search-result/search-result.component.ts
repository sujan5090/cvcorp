import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchResultService } from './search-result.service';
import { StudentData } from '../app.interface';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, OnDestroy {

  public searchResults = [];

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public searchResultService: SearchResultService
  ) { }

  /**
   * Subscribes to searchResults.
   */
  ngOnInit() {
    this.searchResultService.getBoards().subscribe(res => {
      this.searchResults = res;
    });
  }

  /**
   * @ignore
   */
  ngOnDestroy() {
  }

}
