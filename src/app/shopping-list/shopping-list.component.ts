import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] ;
  mySubscription: Subscription;
  // ingredients: Ingredient[] = [
  //   new Ingredient('Onion',1),
  //   new Ingredient('Potatoes',10),
  //   new Ingredient('Tomatoes',5),
  //   new Ingredient('Cabbage',1)
  // ];

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.mySubscription = this.shoppinglistService.ingredientChanged
        .subscribe(
          (ingredients: Ingredient[]) => {
            this.ingredients = ingredients;
          }
        );

    }
  
  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);

  // }
  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }

}
