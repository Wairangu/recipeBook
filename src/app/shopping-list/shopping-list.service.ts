import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';



export class ShoppingListService {
    ingredientChanged = new Subject<Ingredient[]>();
    
    private ingredients: Ingredient[] = [
        new Ingredient('Onion',1),
        new Ingredient('Potatoes',10),
        new Ingredient('Tomatoes',5),
        new Ingredient('Cabbage',1)
      ];

    getIngredients() {
       return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredientsToRecipe(ingredients: Ingredient[]) {
        //  for (let ingredient of ingredients){
        //      this.addIngredient(ingredient);
        //  }
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());


    }    
}