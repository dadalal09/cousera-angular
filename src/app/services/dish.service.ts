import { Injectable } from '@angular/core';
import { Dish } from '../shared/Dish';

import { Observable } from 'rxjs/Observable';
import { baseURL } from '../shared/baseurl';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class DishService {

  constructor(private restAngular : Restangular) { 
  }

   getDishes(): Observable<Dish[]> {
    return this.restAngular.all('dishes').getList();
  }

  getDish(id : number) : Observable<Dish> {
    return this.restAngular.one('dishes',id).get();
  }

  getFeaturedDish() : Observable<Dish> {
      return this.restAngular.all('dishes').getList({featured:true})
      .map(dishes => dishes[0]);
  }

  getDishIds() : Observable<number[]> {
    //return Observable.of(DISHES.map(dish => dish.id)).delay(2000);
    return this.getDishes()
    .map(dishes => {return dishes.map(dish => dish.id)});
    //.catch(error => { return error; });
  }
}
