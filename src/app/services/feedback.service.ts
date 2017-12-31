import { Injectable } from '@angular/core';
import { Feedback } from '../shared/Feedback';

import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class FeedbackService {

  constructor(private restAngular : Restangular) { 
  }

   getFeedback(id : number) : Observable<Feedback> {
    return this.restAngular.one('feedback',id).get();
  }

  submitFeedback(fb: Feedback): Observable<Feedback> {
    const newFeedback = this.restAngular.all('feedback').post(fb);
    return newFeedback;
  }


}
