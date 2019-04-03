import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingridients: Ingredient[];

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    ingridients: Ingredient[]
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingridients = ingridients;
  }
}
