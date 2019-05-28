import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: any; //the recipe being detailed

  constructor(private route: ActivatedRoute, private search: SearchService) { }

  ngOnInit() {
    //get the recipe from the search results based on the name in the URL
    this.recipe = this.search.getRecipe(this.route.snapshot.paramMap.get("name"));
  }

}
