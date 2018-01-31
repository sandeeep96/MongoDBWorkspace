"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
// Observable class extensions
require("rxjs/add/observable/of");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var HomeComponentComponent = /** @class */ (function () {
    function HomeComponentComponent() {
        this.searchTerms = new Subject_1.Subject();
    }
    HomeComponentComponent.prototype.ngOnInit = function () {
    };
    HomeComponentComponent = __decorate([
        core_1.Component({
            selector: 'app-home-component',
            templateUrl: './home-component.component.html',
            styleUrls: ['./home-component.component.css']
        })
    ], HomeComponentComponent);
    return HomeComponentComponent;
}());
exports.HomeComponentComponent = HomeComponentComponent;
