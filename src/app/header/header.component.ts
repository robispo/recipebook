import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent {
  @Output()
  showedRecipeOrShoppingList: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  onShowRecipeOrShoppingList(showRecipe: boolean) {
    this.showedRecipeOrShoppingList.emit(showRecipe);
  }
}
