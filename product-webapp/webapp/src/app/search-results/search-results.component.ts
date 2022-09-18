import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from '../models/product';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private searchService: SearchService, private activatedRoute: ActivatedRoute) { }
  results!: Observable<Product[]>;

  ngOnInit(): void {
    // this.results = this.searchService.getSearchResults(this.activatedRoute.snapshot.params["query"]);
    this.results = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.searchService.getSearchResults(params.get('userQuery')!, params.get('selectedCategory')!)
      )
    )
  }
}
