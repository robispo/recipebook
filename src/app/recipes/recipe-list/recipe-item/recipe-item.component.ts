import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/Services/recipe.service';
import { Router, ActivatedRouteSnapshot, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input()
  recipe: Recipe;
  @Input()
  index: number;

  constructor(private recService: RecipeService, private router: Router) {}

  ngOnInit() {}

  onRecipeSelect() {
    this.router.navigate(['/recipes', this.recipe.id]);
  }
}
