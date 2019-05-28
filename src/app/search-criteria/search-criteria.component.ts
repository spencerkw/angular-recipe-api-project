import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  //diet options for the dropdown
  dietOptions: any[] = [
    { name: "Vegan", value: "vegan" },
    { name: "Vegetarian", value: "vegetarian" },
    { name: "Peanut-Free", value: "peanut-free" },
    { name: "Sugar-Conscious", value: "sugar-conscious"},
    { name: "Alcohol-Free", value: "alcohol-free"}
  ];

  constructor(private search: SearchService, private router: Router) { }

  ngOnInit() {
  }

  //trigger the search when the form is submitted
  searchRecipes(form) {
    console.log(form.value);
    this.search.setOptions(form.value);

    this.router.navigate(["recipe-list"]);
  }
}