import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Pasta',
      'Pasta con tomato.',
      'https://images.media-allrecipes.com/images/56589.png',
      [new Ingredient('1', 1), new Ingredient('2', 1), new Ingredient('3', 1)]
    ),
    new Recipe(
      2,
      'Pasta 2',
      'Pasta con tomato. 2',
      'https://images.media-allrecipes.com/images/56589.png',
      [new Ingredient('4', 1), new Ingredient('2', 1), new Ingredient('6', 1)]
    ),
    new Recipe(
      3,
      'Pasta 3',
      'Pasta con tomato. 3',
      'https://images.media-allrecipes.com/images/56589.png',
      [new Ingredient('7', 1), new Ingredient('8', 1), new Ingredient('10', 1)]
    )
  ];
  recipesChange = new Subject<Recipe[]>();

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: number) {
    return this.recipes.find(r => {
      return r.id === id;
    });
  }

  addRecipe(recipe: Recipe) {
    const max = Math.max(
      ...this.recipes.map(r => {
        return r.id;
      })
    );

    recipe.id = max + 1;
    this.recipes.push(recipe);
    this.recipeChanged();
  }

  updateRecipe(recipe: Recipe) {
    const index = this.recipes.findIndex(r => {
      return r.id === recipe.id;
    });

    this.recipes[index] = recipe;
    this.recipeChanged();
  }

  deleteRecipe(id: number) {
    this.recipes = this.recipes.filter(v => {
      return v.id !== id;
    });

    this.recipeChanged();
  }

  recipeChanged() {
    this.recipesChange.next(this.getRecipes());
  }
}
