import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';
import { Action } from '@ngrx/store';

export interface AppState {
  shoppingList: State;
}

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initialState: State = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatos', 4)],
  editedIngredient: null,
  editedIngredientIndex: -1
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
      ingredients[state.editedIngredientIndex] = data.payload.ingredient;

      return {
        ...state,
        ingredients: [...ingredients],
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      const ings = state.ingredients.filter((v, i, a) => {
        return i !== state.editedIngredientIndex;
      });

      return {
        ...state,
        ingredients: ings,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    case ShoppingListActions.START_EDIT:
      const eIndex = (action as ShoppingListActions.StartEdit).payload;
      const eIng = { ...state.ingredients[eIndex] };

      return {
        ...state,
        editedIngredient: eIng,
        editedIngredientIndex: eIndex
      };
      case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    default:
      return state;
  }
}
