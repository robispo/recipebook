import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  AddIngredient,
  UpdateIngredient,
  DeleteIngredient,
  StopEdit
} from '../store/shopping-list.actions';
import { AppState } from '../store/shopping-list.reducers';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  eiSubscription: Subscription;
  editMode = false;
  ingredient: Ingredient;
  @ViewChild('fsl')
  form: NgForm;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.eiSubscription = this.store.select('shoppingList').subscribe(data => {
      if (data.editedIngredientIndex > -1) {
        this.ingredient = data.editedIngredient;
        this.form.setValue({
          name: this.ingredient.name,
          amount: this.ingredient.amount
        });
        this.editMode = true;
      } else {
        this.editMode = false;
        this.ingredient = null;
      }
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const ing = new Ingredient(form.value.name, +form.value.amount);

      if (this.editMode) {
        this.store.dispatch(new UpdateIngredient({ ingredient: ing }));
      } else {
        this.store.dispatch(new AddIngredient(ing));
      }
      this.onReset();
    }
  }

  onReset() {
    this.editMode = false;
    this.form.reset();
  }

  onDelete() {
    this.store.dispatch(new DeleteIngredient());
    this.onReset();
  }

  ngOnDestroy() {
    this.store.dispatch(new StopEdit());
    this.eiSubscription.unsubscribe();
  }
}
