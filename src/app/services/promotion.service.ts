import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class PromotionService {

  constructor(private restAngular : Restangular) { 
  }

  getPromotions(): Observable<Promotion[]> {
     return this.restAngular.all('promotions').getList();
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.restAngular.one('promotions',id).get();
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.restAngular.all('promotions').getList({featured:true})
    .map(dishes => dishes[0]);
  }
}