import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favorites: any[]; //favorite recipes

  constructor() { }

  addFavorite(recipe: any): any[] {
    this.favorites.push(recipe);
    return this.favorites;
  }

  removeFavorite(index: number): any[] {
    this.favorites.splice(index, 1);
    return this.favorites;
  }

  getFavorites(): any[] {
    return this.favorites;
  }
}
