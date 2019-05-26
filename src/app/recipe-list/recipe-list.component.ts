import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SearchService } from "../search.service";

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeList: any[];

  constructor(private api: ApiService, private search: SearchService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.api.getData(this.search.getOptions()).subscribe(response => {
      console.log(response);
    });
  }

}
