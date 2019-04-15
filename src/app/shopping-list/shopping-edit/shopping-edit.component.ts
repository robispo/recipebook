import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { ShoppingListService } from 'src/app/Services/shopping-list.service';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  eiSubscription: Subscription;
  editMode = false;
  index: number;
  ingredient: Ingredient;
  @ViewChild('fsl')
  form: NgForm;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.eiSubscription = this.slService.ingredientEdit.subscribe(
      (index: number) => {
        this.editMode = true;
        this.index = index;
        this.ingredient = this.slService.getIngredient(this.index);
        this.form.setValue({
          name: this.ingredient.name,
          amount: this.ingredient.amount
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const ing = new Ingredient(form.value.name, +form.value.amount);

      if (this.editMode) {
        this.slService.updateIngredient(this.index, ing);
      } else {
        this.slService.addIngredient(ing);
      }
      this.onReset();
    }
  }

  onReset() {
    this.editMode = false;
    this.form.reset();
  }

  onDelete() {
    this.slService.deleteIngredient(this.index);
    this.onReset();
  }

  ngOnDestroy() {
    this.eiSubscription.unsubscribe();
  }
}
