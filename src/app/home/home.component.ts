import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { MatSpinner } from '@angular/material';
import { flyInOut,expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class HomeComponent implements OnInit {

  dish : Dish;
  promotion : Promotion;
  leader : Leader;
  dishErrMess : string;
  
  constructor(private dishService : DishService, 
    private promotionService : PromotionService, 
    private leaderService : LeaderService,
    @Inject('BaseURL') private BaseURL) { 

  }

  ngOnInit() {
    /*this.dishService.getFeaturedDish().then((dish) => {
      console.log("dish " + dish);
      dish => this.dish = dish
    }).catch((reason) => {
      console.log('Handle rejected promise ('+reason+') here.');
     });
     console.log("this.dish " + this.dish);*/
    this.dishService.getFeaturedDish().subscribe(dish => this.dish = dish,
      errMess => this.dishErrMess = errMess);
    this.promotionService.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);
    this.leaderService.getFeaturedLeader().subscribe(leader => this.leader = leader);
    console.log("Featured leader init : " +this.leader);
  }

}
