import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  dietOptions: any[] = [
    { name: "Vegan", value: "vegan" },
    { name: "Vegetarian", value: "vegetarian" },
    { name: "Peanut-Free", value: "peanut-free" },
    { name: "Sugar-Conscious", value: "sugar-conscious"},
    { name: "Alcohol-Free", value: "alcohol-free"}
  ];

  constructor() { }

  ngOnInit() {
  }

  searchRecipes(form) {
    console.log(form.value);
  }

}
