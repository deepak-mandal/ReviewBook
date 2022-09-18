import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categoryOptions = ["all", "electronics", "fashion", "food", "furniture", "outdoor"]
  searchValue: string = '';
  selectedCategory: string = 'all';
}
