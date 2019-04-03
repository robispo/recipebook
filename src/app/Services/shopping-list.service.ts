import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 4)
  ];
  ingredientsChangedEvent = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChangedEvent.emit(this.ingredients);
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

    this.ingredientsChangedEvent.emit(this.ingredients);
  }
}
