import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {MyData} from './mydata';

@Injectable()
export class MyDataService {

    constructor(private http: Http) { }

    // private endpointURL = 'http://localhost:3000/winners';  // URL to web api
    private endpointURL = 'http://172.24.214.51:8085/solr/report/select?q=*:*';

    private headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'});

    private options = new RequestOptions({ headers: this.headers });

    getWinners(): Observable<MyData[]> {
        return this.http.get(this.endpointURL)
                   .map(response => {
                     console.log(response);
                     console.log(response.json().response.docs);
                     return response.json().response.docs as MyData[]})
                   .catch(this.handleError);
      }
       
      private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
      }

}