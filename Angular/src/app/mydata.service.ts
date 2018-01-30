import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {MyData} from './mydata';

@Injectable()
export class MyDataService {

    constructor(private http: Http) { }

    private endpointURL = 'http://localhost:3000/winners';  // URL to web api

    private headers = new Headers({'Content-Type': 'application/json'});

    getWinners(): Observable<MyData[]> {
        return this.http.get(this.endpointURL)
                   .map(response => response.json() as MyData[])
                   .catch(this.handleError);
      }
       
      private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
      }

}