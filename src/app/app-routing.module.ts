import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const routes: Routes = [
  {path: "", redirectTo: "/search", pathMatch: "full"},
  {path: "search", component: SearchCriteriaComponent},
  {path: "recipe-list", component: RecipeListComponent},
  {path: "favorites", component: FavoritesPageComponent},
  {path: "recipe/:name", component: RecipeDetailComponent},
  {path: "**", redirectTo: "/search"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
