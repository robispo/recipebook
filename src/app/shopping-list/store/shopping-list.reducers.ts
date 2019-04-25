import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';
import { Action } from '@ngrx/store';

const initialState = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatos', 4)]
};
export function shoppingListReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          (action as ShoppingListActions.AddIngredient).payload
        ]
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          ...(action as ShoppingListActions.AddIngredients).payload
        ]
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      const data = action as ShoppingListActions.UpdateIngredient;
      const ingredients = state.ingredients;
      ingredients[data.payload.index] = data.payload.ingredient;

      return {
        ...state,
        ingredients: [...ingredients]
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      const index = (action as ShoppingListActions.DeleteIngredient).payload;

      const ings = state.ingredients.filter((v, i, a) => {
        return i !== index;
      });

      return {
        ...state,
        ingredients: ings
      };
    default:
      return state;
  }
}
