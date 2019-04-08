import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/Services/shopping-list.service';
import { Params, ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/Services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private slService: ShoppingListService,
    private route: ActivatedRoute,
    private recService: RecipeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipe = this.recService.getRecipe(+params.id);
    });
  }

  onAddToShoppinList() {
    this.slService.addIngredients(this.recipe.ingridients);
  }
}
