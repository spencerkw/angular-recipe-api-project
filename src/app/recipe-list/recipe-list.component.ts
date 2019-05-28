import { Component, OnInit } from '@angular/core';
import { SearchService } from "../search.service";

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeList: any[] = []; //the list of recipes being displayed

  constructor(private search: SearchService) { }

  ngOnInit() {
    this.getRecipes(); //get the recipes when it loads
  }

  //get the search results from the search service
  getRecipes() {
    this.recipeList = this.search.getSearchResults();
    //console.log(this.recipeList);
  }

  // old code from when this used the observable
  // private handleResponse = (response: any) => {
  //   for (let hit of response["hits"]) {
  //     this.recipeList.push(hit.recipe);
  //   }
  // }

}
