import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test',
    'this is a test',
    'http://2.bp.blogspot.com/-UXaKfAnAWRY/TbZ7Jtz5g8I/AAAAAAAALbs/0Sz83Nr5oxQ/s1600/recipe+clipart.gif'
  ),
  new Recipe('Another test',
  'this is another test',
  'http://2.bp.blogspot.com/-UXaKfAnAWRY/TbZ7Jtz5g8I/AAAAAAAALbs/0Sz83Nr5oxQ/s1600/recipe+clipart.gif'
)

  ];

  constructor() { }

  ngOnInit() {
  }

}
