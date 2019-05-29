import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  favorites: any[] = [];

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
    //get the favorites when the page loads
    this.favorites = this.favoritesService.getFavorites();
  }

  addFavorite(recipe: any): void {
    this.favorites = this.favoritesService.addFavorite(recipe);
  }

  removeFavorite(recipe: any): void {
    this.favorites = this.favoritesService.removeFavorite(recipe);
  }

}
