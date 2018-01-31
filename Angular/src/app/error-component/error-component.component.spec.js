"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var error_component_component_1 = require("./error-component.component");
describe('ErrorComponentComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [error_component_component_1.ErrorComponentComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(error_component_component_1.ErrorComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
