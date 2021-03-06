"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require("./app.component");
var login_component_1 = require("./components/Login/login.component");
var user_component_1 = require("./components/Users/user.component");
var app_route_1 = require("./app.route");
var http_1 = require("@angular/http");
var signup_component_1 = require("./components/Signup/signup.component");
var appModule = (function () {
    function appModule() {
    }
    appModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_route_1.routing,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.appComponent,
                login_component_1.loginComponent,
                signup_component_1.signupComponent,
                user_component_1.userComponent
            ],
            bootstrap: [
                app_component_1.appComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], appModule);
    return appModule;
}());
exports.appModule = appModule;
//# sourceMappingURL=app.module.js.map