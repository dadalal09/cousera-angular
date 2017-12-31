import { baseURL } from './baseurl';
import { Injectable } from '@angular/core';

// Function for settting the default restangular configuration
export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl(baseURL);
 }

/*@Injectable()
export class RestangularConfigFactory {
  constructor(private RestangularProvider: any, private injector: any) { }
 }*/