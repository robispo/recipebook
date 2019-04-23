import { Component } from '@angular/core';
import { DataStorageService } from '../../Services/data-storage.service';
import { RecipeService } from '../../Services/recipe.service';
import { Recipe } from '../../recipes/recipe.model';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private dsService: DataStorageService,
    private recService: RecipeService,
    private authService: AuthService,
    private router: Router
  ) {}

  onSave() {
    this.dsService.saveRecipes(this.recService.getRecipes()).subscribe(r => {
      console.log(r);
    });
  }

  onGet() {
    this.dsService.getRecipes().subscribe((recipes: Recipe[]) => {
      this.recService.setRecipes(recipes);
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
