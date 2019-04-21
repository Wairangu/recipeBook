import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDeleteComponent } from './recipes/recipes/recipe-delete/recipe-delete.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipesStartComponent},
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent},
    { path: ':id/edit', component: RecipeEditComponent },
    { path: ':id/delete', component: RecipeDeleteComponent }
                                             
  ]},
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: '**', component: ErrorComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
