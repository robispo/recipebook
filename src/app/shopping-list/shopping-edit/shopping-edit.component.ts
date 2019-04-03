import { Component, OnInit } from '@angular/core';

import { ShoppingListService } from 'src/app/Services/shopping-list.service';

import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private slService: ShoppingListService) {}

  ngOnInit() {}

  onAddIngredient(name: HTMLInputElement, amount: HTMLInputElement) {
    this.slService.addIngredient(
      new Ingredient(name.value, parseInt(amount.value))
    );
  }
}
