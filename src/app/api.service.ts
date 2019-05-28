import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchOptions } from './search-options';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apikey: string = "a8066eca63125eb045b527bbf7256cbb";
  appid: string = "fc8bcc30";
  apiUrl: string = "https://api.edamam.com/search"; //URL for the API

  constructor(private http: HttpClient) { }

  getData(options: SearchOptions) {
    //base URL to use for searches
    let searchUrl = this.apiUrl + `?q=${options.searchText}&app_id=${this.appid}&app_key=${this.apikey}&to=25`;

    //add the health tag if we're looking for one
    if (options.dietaryRestriction) {
      searchUrl += `&health=${options.dietaryRestriction}`;
    }

    //handle adding the calorie range if we need to
    if (options.minCalories || options.maxCalories) {
      let caloriesUrl = "&calories="; //base

      if (options.minCalories) { //if we have a min calorie count
        caloriesUrl += options.minCalories.toString(); //append it

        if (!options.maxCalories) { //if there is no max
          caloriesUrl += "+"; //add the plus so that it will search from min up
        } else {
          caloriesUrl += "-"; //else add the dash, anticipating a range
        }
      }

      if (options.maxCalories) { //if we have a max calorie count
        caloriesUrl += options.maxCalories.toString(); //append it
      }

      searchUrl += caloriesUrl; //append the calorie part to the URL
    }

    console.log(searchUrl);

    return this.http.get(searchUrl); //return the request
  }
}

