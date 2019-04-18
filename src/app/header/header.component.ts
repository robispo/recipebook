import { Component } from '@angular/core';
import { DataStorageService } from '../Services/data-storage.service';
import { RecipeService } from '../Services/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private fbService: DataStorageService,
    private recService: RecipeService
  ) {}

  onSave() {
    this.fbService.saveRecipes(this.recService.getRecipes()).subscribe(r => {
      console.log(r);
    });
  }

  onGet() {
    this.fbService.getRecipes().subscribe((recipes: Recipe[]) => {
      this.recService.setRecipes(recipes);
    });
  }
}
