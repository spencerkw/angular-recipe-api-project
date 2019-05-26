import { Injectable } from '@angular/core';
import { SearchOptions } from './search-options';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchOptions: SearchOptions;

  constructor() { }

  setOptions(options: SearchOptions) {
    this.searchOptions = options;
  }

  getOptions(): SearchOptions {
    return this.searchOptions;
  }
}
