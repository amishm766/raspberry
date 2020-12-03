import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from '../../models/recipe/recipe.model';
import { Ingredient } from '../../models/shopping-list/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor() {}

  recipes: Recipe[] = [
    new Recipe(
      'Recipe 1',
      'This is a first Recipe',
      'data:image/jpeg;base64,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',
      [new Ingredient('Bread', 40), new Ingredient('Sugar', 50)]
    ),
    new Recipe(
      'Recipe 2',
      'This is a second Recipe',
      'data:image/jpeg;base64,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',
      [new Ingredient('Bread', 40), new Ingredient('Sugar', 50)]
    ),
    new Recipe(
      'Recipe 3',
      'This is a third Recipe',
      'data:image/jpeg;base64,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',
      [new Ingredient('Bread', 40), new Ingredient('Sugar', 50)]
    ),
  ];

  private _currentlySelectedRecipeItemSubject$ = new BehaviorSubject<Recipe>(
    new Recipe('', '', '', [])
  );
  private _currentlyRecipeItemSelected$ = this._currentlySelectedRecipeItemSubject$.asObservable();

  getCurrentlySelectedRecipeItem$() {
    return this._currentlyRecipeItemSelected$;
  }

  setCurrentlySelectedRecipeItem$(recipeItem: Recipe) {
    this._currentlySelectedRecipeItemSubject$.next(recipeItem);
  }
}