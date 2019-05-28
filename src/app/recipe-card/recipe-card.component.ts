import { Component, OnInit, Input } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe: any; //the recipe for this card

  constructor(private favorites: FavoritesService, private router: Router) { }

  ngOnInit() {
  }

  //navigate to the detail page for this recipe
  goToRecipeDetail() {
    this.router.navigate(["recipe", this.recipe.label]);
  }

  //toggle if this recipe is a favorite
  toggleFavorite() {
    if (this.favorites.contains(this.recipe)) {
      this.favorites.removeFavorite(this.recipe);
    } else {
      this.favorites.addFavorite(this.recipe);
    }
  }

}
