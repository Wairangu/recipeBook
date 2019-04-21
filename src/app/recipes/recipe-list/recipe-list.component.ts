import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];


  // recipes: Recipe[] = [
  //   new Recipe('Fried Egg Rice Mix', 'A recipe of fried egg with rice', 'https://prods3.imgix.net/images/articles/2017_04/Non-featured-Chorizo-egg-recipe.jpg'),
  //   new Recipe('Croissant with salad','A recipe of circular croissant with salad.','https://images-gmi-pmc.edge-generalmills.com/23bcd559-1e27-4c54-90a7-812690764c7f.jpg'),
  //   new Recipe('Pancake','Kenyan pancake with sauce','https://www.kroger.com/asset/5bfbfe3b9da07c0aa601e6bb?data=1')
  // ];

  constructor(private recipeService: RecipeService, 
              private router: Router,
              private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route}); 
  }


}
