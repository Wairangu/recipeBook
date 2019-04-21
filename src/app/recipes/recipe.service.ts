import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Fried Egg Rice Mix', 
        'A recipe of fried egg with rice', 
        'https://cdn.pixabay.com/photo/2016/06/16/01/41/egg-1460404_960_720.jpg',
        [
            new Ingredient('Eggs', 10),
            new Ingredient('Wheat Flour', 2)
        ],
        ),
        new Recipe('Croissant with salad',
        'A recipe of circular croissant with salad.',
        'https://cdn.pixabay.com/photo/2017/12/29/19/37/food-3048440_960_720.jpg',
        [
            new Ingredient('Wheat flour', 1),
            new Ingredient('Milk', 3),
            new Ingredient('Margearine',1)
        ],
        ),
        new Recipe('Pancake',
        'Kenyan pancake with sauce',
        'https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_960_720.jpg',
        [
            new Ingredient('Wheat flour', 2),
            new Ingredient('Sugar Syrup', 1),
            new Ingredient('Eggs',5),
        ]
        )
      ];

      constructor(private shoppingListService: ShoppingListService){}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredientsToRecipe(ingredients);

    }
}