import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 4)
  ];
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredientEdit = new Subject<number>();

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    if (!ingredients) {
      return;
    }

    ingredients.forEach(i => {
      const index = this.ingredients.findIndex(ii => ii.name === i.name);
      if (index >= 0) {
        this.ingredients[index].amount += i.amount;
      } else {
        this.ingredients.push(i);
      }
    });

    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients = this.ingredients.filter((v, i, a) => {
      return i !== index;
    });
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
