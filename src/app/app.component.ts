import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import{DetailRecipeComponent} from './detail-recipe/detail-recipe.component';
import {FooterComponent} from './footer/footer.component';
import { Recipe } from './recipe-list/models/recipe.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,RecipeListComponent, DetailRecipeComponent,FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe-app';
 selectedRecipe ?: Recipe;
 OnSelect(recipe : Recipe){
 this.selectedRecipe = recipe;
 }
}
