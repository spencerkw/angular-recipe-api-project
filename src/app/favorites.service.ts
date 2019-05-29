import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favorites: any[] = []; //favorite recipes

  constructor() { }

  //add the given recipe to the favorites
  addFavorite(recipe: any): any[] {
    this.favorites = [...this.favorites, recipe];
    //this.favorites.push(recipe);
    return this.favorites;
  }

  //remove the given recipe from the favorites
  removeFavorite(recipe: any): any[] {
    let index = this.favorites.findIndex(favorite =>
      favorite.label.toLowerCase() === recipe.label.toLowerCase());
    this.favorites = [...this.favorites.slice(0, index), ...this.favorites.slice(index+1)];
    //this.favorites.splice(index, 1);
    return this.favorites;
  }

  //get the array of favorites
  getFavorites(): any[] {
    return this.favorites;
  }

  //return whether or not the favorites array has the given recipe
  contains(recipe: any): boolean {
    return this.favorites.includes(recipe);
  }
}
