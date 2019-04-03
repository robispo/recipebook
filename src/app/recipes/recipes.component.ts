import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from '../Services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  recipe: Recipe;

  constructor(private recService: RecipeService) {}

  ngOnInit() {
    this.recService.recipeSelected.subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    });
  }
}
