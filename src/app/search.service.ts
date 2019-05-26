import { Injectable } from '@angular/core';
import { SearchOptions } from './search-options';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchOptions: SearchOptions;
  private searchResults: Observable<Object> = null;

  constructor(private api: ApiService) { }

  setOptions(options: SearchOptions) {
    this.searchOptions = options;
    this.searchResults = null; //clear it before getting new results
    this.performSearch();
  }

  getOptions(): SearchOptions {
    return this.searchOptions;
  }

  getSearchResults(): Observable<Object> {
    if (this.searchResults === null) {
      this.searchOptions = {
        searchText: ""
      }
      this.performSearch();
    }
    return this.searchResults;
  }

  private performSearch(): void {
    this.searchResults = this.api.getData(this.searchOptions);
  }

  // private handleResponse(response: any): void {
  //   for (let hit of response["hits"]) {
  //     this.searchResults.push(hit.recipe);
  //   }
  // }
}
