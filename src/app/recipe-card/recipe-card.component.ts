import { Component, OnInit, Input } from '@angular/core';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe: any;

  constructor(private favorites: FavoritesService) { }

  ngOnInit() {
  }

  goToRecipeDetail() {

  }

  toggleFavorite() {
    if (this.favorites.favoritesContains(this.recipe)) {
      this.favorites.removeFavorite(this.recipe);
    } else {
      this.favorites.addFavorite(this.recipe);
    }
  }

}
