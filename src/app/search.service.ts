import { Injectable } from '@angular/core';
import { SearchOptions } from './search-options';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchOptions: SearchOptions; //the options for the current search
  private searchResults: any[] = []; //results of the current search

  constructor(private api: ApiService) { }

  //set the options as provided and do a search with them
  setOptions(options: SearchOptions) {
    this.searchOptions = options;
    this.searchResults = []; //clear it before getting new results
    this.performSearch();
  }

  //get the options for the current search
  getOptions(): SearchOptions {
    return this.searchOptions;
  }

  //get the array of search results
  getSearchResults(): any[] {
    return this.searchResults;
  }

  //get a specific recipe from the search results, based on name
  getRecipe(name: string): any {
    return this.searchResults.find(recipe => recipe.label.toLowerCase() === name.toLowerCase())
  }

  //perform a search
  private performSearch(): void {
    this.api.getData(this.searchOptions).subscribe(this.handleResponse);
  }

  //handler for getting the data from the observable
  private handleResponse = (response: any): void => {
    for (let hit of response["hits"]) {
      this.searchResults.push({...hit.recipe});
    }
  }
}
