"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var MyDataService = /** @class */ (function () {
    function MyDataService(http) {
        this.http = http;
        // private endpointURL = 'http://localhost:3000/winners';  // URL to web api
        this.endpointURL = 'http://172.24.214.51:8085/solr/report/select?q=*:*';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    MyDataService.prototype.getWinners = function () {
        return this.http.get(this.endpointURL)
            .map(function (response) {
            console.log(response);
            console.log(response.json().response.docs);
            return response.json().response.docs;
        })["catch"](this.handleError);
    };
    MyDataService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    MyDataService = __decorate([
        core_1.Injectable()
    ], MyDataService);
    return MyDataService;
}());
exports.MyDataService = MyDataService;
