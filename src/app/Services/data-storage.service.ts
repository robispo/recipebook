import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Recipe } from '../recipes/recipe.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private pathUrl = 'https://ng-recipebook-32880.firebaseio.com/recipe.json';

  constructor(
    private httpClient: HttpClient
  ) {}

  saveRecipes(recipes: Recipe[]) {
    return this.httpClient.put(this.pathUrl, recipes);
  }

  getRecipes() {
    return this.httpClient.get(this.pathUrl);
  }
}
