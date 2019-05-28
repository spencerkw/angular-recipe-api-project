import { Injectable } from '@angular/core';
import { SearchOptions } from './search-options';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchOptions: SearchOptions;
  private searchResults: any[] = [];

  constructor(private api: ApiService) { }

  setOptions(options: SearchOptions) {
    this.searchOptions = options;
    this.searchResults = []; //clear it before getting new results
    this.performSearch();
  }

  getOptions(): SearchOptions {
    return this.searchOptions;
  }

  getSearchResults(): any[] {
    // if (this.searchResults.length === 0) {
    //   this.searchOptions = {
    //     searchText: "tacos"
    //   }
    //   this.performSearch();
    // }
    return this.searchResults;
  }

  getRecipe(name: string): any {
    return this.searchResults.find(recipe => recipe.label.toLowerCase() === name.toLowerCase())
  }

  private performSearch(): void {
    this.api.getData(this.searchOptions).subscribe(this.handleResponse);
  }

  private handleResponse = (response: any): void => {
    for (let hit of response["hits"]) {
      this.searchResults.push(hit.recipe);
    }
  }
}
