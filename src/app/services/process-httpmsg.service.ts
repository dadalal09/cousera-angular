import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/Observable/throw';

@Injectable()
export class ProcessHttpmsgService {

  constructor() { }

  public extractData(res : Object) : Response{
    let body;
    if(res instanceof Response){ 
      let body =  res.json();
    }
    return body || {};
  }

  public handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
