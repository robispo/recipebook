import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/Services/recipe.service';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import { AppState } from 'src/app/shopping-list/store/shopping-list.reducers';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recService: RecipeService,
    private router: Router,
    private store: Store<AppState>
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
