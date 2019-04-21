import { Component } from '@angular/core';
import { Recipe } from './recipes/recipes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipeBook';
  loadedFeature = 'recipe';

  onNavigate(feature: string){
    this.loadedFeature = feature;

  }
}
