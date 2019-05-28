import { Component, OnInit } from '@angular/core';
import { SearchService } from "../search.service";

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeList: any[] = [];

  constructor(private search: SearchService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeList = this.search.getSearchResults();
    console.log(this.recipeList);
  }

  private handleResponse = (response: any) => {
    for (let hit of response["hits"]) {
      this.recipeList.push(hit.recipe);
    }
  }

}
