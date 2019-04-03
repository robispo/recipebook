import { EventEmitter } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Pasta',
      'Pasta con tomate.',
      'https://images.media-allrecipes.com/images/56589.png',
      [new Ingredient('1', 1), new Ingredient('2', 1), new Ingredient('3', 1)]
    ),
    new Recipe(
      'Pasta 2',
      'Pasta con tomate. 3',
      'https://images.media-allrecipes.com/images/56589.png',
      [new Ingredient('4', 1), new Ingredient('2', 1), new Ingredient('6', 1)]
    ),
    new Recipe(
      'Pasta 3',
      'Pasta con tomate. 3',
      'https://images.media-allrecipes.com/images/56589.png',
      [new Ingredient('7', 1), new Ingredient('8', 1), new Ingredient('10', 1)]
    )
  ];
  public recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }
}
