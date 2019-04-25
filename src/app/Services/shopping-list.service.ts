import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';

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

  constructor(
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) {}

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
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
