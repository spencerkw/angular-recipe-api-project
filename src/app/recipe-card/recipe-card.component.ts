import { Component, OnInit, Input } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe: any;

  constructor(private favorites: FavoritesService, private router: Router) { }

  ngOnInit() {
  }

  goToRecipeDetail() {
    this.router.navigate(["recipe", this.recipe.label]);
  }

  toggleFavorite() {
    if (this.favorites.contains(this.recipe)) {
      this.favorites.removeFavorite(this.recipe);
    } else {
      this.favorites.addFavorite(this.recipe);
    }
  }

}
