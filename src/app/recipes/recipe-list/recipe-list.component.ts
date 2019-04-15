import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/Services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];

  constructor(private recService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recService.getRecipes();

    this.recService.recipesChange.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }

  ngOnDestroy() {
    this.recService.recipesChange.unsubscribe();
  }
}
