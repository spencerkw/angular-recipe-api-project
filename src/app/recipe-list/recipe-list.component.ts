import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getData("chicken").subscribe(response => {
      console.log(response);
    });
  }

}
