import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe-list/models/recipe.model';

@Component({
  selector: 'app-detail-recipe',
  standalone: true,
  imports: [],
  templateUrl: './detail-recipe.component.html',
  styleUrl: './detail-recipe.component.css'
})
export class DetailRecipeComponent {
@Input() recipe?:  Recipe;
}
