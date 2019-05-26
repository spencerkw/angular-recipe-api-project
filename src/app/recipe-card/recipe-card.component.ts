import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe: any;

  constructor() { }

  ngOnInit() {
  }

  goToRecipeDetail() {

  }

}
