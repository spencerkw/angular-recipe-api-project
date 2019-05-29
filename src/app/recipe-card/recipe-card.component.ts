import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe: any; //the recipe for this card

  @Output() onAddFavorite = new EventEmitter<any>();
  @Output() onRemoveFavorite = new EventEmitter<any>();

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
      //this.favorites.removeFavorite(this.recipe);
      this.onRemoveFavorite.emit(this.recipe);
    } else {
      //this.favorites.addFavorite(this.recipe);
      this.onAddFavorite.emit(this.recipe);
    }
  }

}
