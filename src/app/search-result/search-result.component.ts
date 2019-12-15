import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchResultService } from './search-result.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, OnDestroy {

  /**
   * Referrence to search results subscription so that we can unsubscribe in ngDestroy
   */
  // public resultsSubscription: Subscription;
  // public lastSearchTermSubscription: Subscription;

  /**
   * @ignore
   */
  constructor(
      public route: ActivatedRoute,
      public router: Router,
      public searchResultService: SearchResultService
  ) { }

  /**
   * Subscribes to searchResults.
   */
  ngOnInit() {
    // this.searchResultService.getBoards();
      this.searchResultService.getBoards().subscribe(res =>{
          console.log('the res is ', res);
      });
  }

  /**
   * @ignore
   */
  ngOnDestroy() {
  }

}
