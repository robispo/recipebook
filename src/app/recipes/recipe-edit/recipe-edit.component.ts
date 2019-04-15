import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AbstractControl
} from '@angular/forms';
import { RecipeService } from 'src/app/Services/recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = params.id != null;
      this.initForm(this.id);
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.recService.updateRecipe(this.recipeForm.value);
    } else {
      this.recService.addRecipe(this.recipeForm.value);
    }
    this.goBack();
  }

  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  getIngridientsArray() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  onAddIngredient() {
    const ingredients = this.recipeForm.get('ingredients') as FormArray;
    ingredients.push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.min(0)])
      })
    );
  }

  onDeleteIngredient(index: number) {
    const ingredients = this.recipeForm.get('ingredients') as FormArray;
    ingredients.removeAt(index);
  }

  isInvalidControl(name: string, formGroup?: FormGroup) {
    let control: AbstractControl;

    if (formGroup) {
      control = formGroup.get(name);
    } else {
      control = this.recipeForm.get(name);
    }
    return !control.valid && control.touched;
  }

  private initForm(id: number) {
    let name = '';
    let imagePath = '';
    let description = '';
    const ingredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recService.getRecipe(this.id);
      name = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;
      if (recipe.ingredients) {
        for (let i = 0; i < recipe.ingredients.length; i++) {
          const element = recipe.ingredients[i];
          ingredients.push(
            new FormGroup({
              name: new FormControl(element.name, Validators.required),
              amount: new FormControl(element.amount, [
                Validators.required,
                Validators.min(0)
              ])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      id: new FormControl(id),
      name: new FormControl(name, Validators.required),
      description: new FormControl(description, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      ingredients
    });
  }
}
