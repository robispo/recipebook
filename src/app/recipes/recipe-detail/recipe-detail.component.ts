import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/Services/shopping-list.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/Services/recipe.service';
import { Store } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
   // private slService: ShoppingListService,
    private route: ActivatedRoute,
    private recService: RecipeService,
    private router: Router,
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipe = this.recService.getRecipe(+params.id);
    });
  }

  onAddToShoppinList() {
    this.store.dispatch(
      new ShoppingListActions.AddIngredients(this.recipe.ingredients)
    );
    //this.slService.addIngredients(this.recipe.ingredients);
  }

  onDeleteRecipe() {
    if (confirm('Are you sure you want to delete this recipe?')) {
      this.recService.deleteRecipe(this.recipe.id);
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }
}
