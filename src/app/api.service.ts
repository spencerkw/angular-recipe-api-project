import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchOptions } from './search-options';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apikey: string = "a8066eca63125eb045b527bbf7256cbb";
  appid: string = "fc8bcc30";
  apiUrl: string = "https://api.edamam.com/search";

  constructor(private http: HttpClient) { }

  getData(options: SearchOptions) {
    let searchUrl = this.apiUrl + `?q=${options.searchText}&app_id=${this.appid}&app_key=${this.apikey}&to=25`;

    if (options.dietaryRestriction) {
      searchUrl += `&health=${options.dietaryRestriction}`;
    }

    if (options.minCalories || options.maxCalories) {
      let caloriesUrl = "&calories=";

      if (options.minCalories) {
        caloriesUrl += options.minCalories.toString();

        if (!options.maxCalories) {
          caloriesUrl += "+";
        } else {
          caloriesUrl += "-";
        }
      }

      if (options.maxCalories) {
        caloriesUrl += options.maxCalories.toString();
      }

      searchUrl += caloriesUrl;
    }

    console.log(searchUrl);

    return this.http.get(searchUrl);
  }
}

