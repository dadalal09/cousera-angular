import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class LeaderService {

  constructor(private restAngular : Restangular) {
   }

  public getLeaderList(): Observable<Leader[]> {
    return this.restAngular.all('leaders').getList();
  }

  getLeader(id: number): Observable<Leader> {
    /*return new Promise ( resolve => {setTimeout(() => resolve(LEADERS.filter((promo) => (promo.id === id))[0]) , 2000)
    });*/
    return Observable.of(LEADERS.filter((promo) => (promo.id === id))[0]).delay(2000);
  }

  getFeaturedLeader(): Observable<Leader> {
    /*return new Promise ( resolve => {setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]) , 2000)
    });*/

    return Observable.of(LEADERS.filter((leader) => leader.featured)[0]).delay(2000);
  }
}