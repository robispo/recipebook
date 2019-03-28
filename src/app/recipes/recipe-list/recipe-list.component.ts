import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pasta',
      'Pasta con tomate.',
      'https://images.media-allrecipes.com/images/56589.png'
    ),
    new Recipe(
      'Pasta 2',
      'Pasta con tomate. 3',
      'https://images.media-allrecipes.com/images/56589.png'
    ),
    new Recipe(
      'Pasta 3',
      'Pasta con tomate. 3',
      'https://images.media-allrecipes.com/images/56589.png'
    )
  ];

  constructor() {}

  ngOnInit() {}
}
