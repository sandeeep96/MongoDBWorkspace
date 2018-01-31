"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var forms_2 = require("@angular/forms");
var app_component_1 = require("./app.component");
var error_component_component_1 = require("./error-component/error-component.component");
var home_component_component_1 = require("./home-component/home-component.component");
var table_component_component_1 = require("./table-component/table-component.component");
var mydata_service_1 = require("./mydata.service");
var routes = [
    { path: '',
        redirectTo: 'home',
        pathMatch: 'full' },
    { path: 'home',
        component: home_component_component_1.HomeComponentComponent,
        children: [
            { path: '', redirectTo: 'table', pathMatch: 'full' },
            { path: 'table', component: table_component_component_1.TableComponentComponent },
        ] },
    { path: '**', component: error_component_component_1.ErrorComponentComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_component_1.HomeComponentComponent,
                table_component_component_1.TableComponentComponent,
                error_component_component_1.ErrorComponentComponent,
            ],
            imports: [
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_2.ReactiveFormsModule,
                router_1.RouterModule.forRoot(routes),
            ],
            providers: [mydata_service_1.MyDataService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
