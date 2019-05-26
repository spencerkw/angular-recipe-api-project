import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
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
    this.search.getSearchResults().subscribe(this.handleResponse);
    console.log(this.recipeList);
  }

  private handleResponse = (response: any) => {
    for (let hit of response["hits"]) {
      this.recipeList.push(hit.recipe);
    }
  }

}
