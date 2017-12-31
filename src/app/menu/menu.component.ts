import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { MatSpinner } from '@angular/material';

import { baseURL } from '../shared/baseurl';
import { flyInOut, expand } from '../animations/app.animation';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})

export class MenuComponent implements OnInit {

  dishes: Dish[];
  selectedDish : Dish;
  errMess: String;

  constructor(private dishService : DishService, 
  @Inject('BaseURL') private BaseURL) {
      
   }

  ngOnInit() {
    console.log("inside menu ngInit");
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes,
      errmess => this.errMess = <any>errmess);
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
    console.log("inside onselect " + dish);
  }

}
