import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from './models/recipe.model'
import { AppIsVegetaianDirective } from '../app-is-vegetaian.directive';
import { ShortenPipe } from '../shorten.pipe';
@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [AppIsVegetaianDirective, ShortenPipe],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() selectedRecipe = new EventEmitter();

  recipes: Recipe[] = [
    {
      id: 1, name: 'Spaghetti Bolognese', description: 'A classic Italian', ingredients: ['pasta', 'meatball'], isVegetarian: false
    },
    { id: 2, name: 'Chicken Curry', description: 'A classic Indian', ingredients: ['chicken', 'curry'], isVegetarian: false },
    { id: 3, name: 'Grilled Salmon', description: 'A classic Greek', ingredients: ['salmon', 'lemon', 'garlic'], isVegetarian: false },
    { id: 4, name: 'Vegetable Stir-Fry', description: 'A classic Chinese', ingredients: ['vegetables', 'soy sauce', 'rice'], isVegetarian: true },
    { id: 5, name: 'Caesar Salad', description: 'A classic American', ingredients: ['lettuce', 'croutons', 'parmesan', 'chicken'], isVegetarian: true },
    { id: 6, name: 'Beef Stew', description: 'A classic Mexican', ingredients: ['beef', 'potatoes', 'carrots', 'onions'], isVegetarian: false },
    { id: 7, name: 'Pasta Primavera', description: 'A classic Italian', ingredients: ['pasta', 'vegetables', 'cream sauce'], isVegetarian: true },
    { id: 8, name: 'Vegetarian Chili', description: 'A classic Mexican', ingredients: ['beans', 'tomatoes', 'peppers', 'onions'], isVegetarian: true },
    { id: 9, name: 'Shrimp Scampi', description: 'A classic Italian', ingredients: ['shrimp', 'garlic', 'butter', 'pasta'], isVegetarian: false },
    { id: 10, name: 'Mushroom Risotto', description: 'A classic Italian', ingredients: ['rice', 'mushrooms', 'vegetable broth', 'parmesan'], isVegetarian: true }
  ];
OnSelectRecipe (recipe: any){
  this.selectedRecipe.emit(recipe);
}
}
