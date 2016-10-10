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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var loginComponent = (function () {
    function loginComponent(router, http) {
        this.router = router;
        this.http = http;
        this.user = {};
    }
    loginComponent.prototype.login = function (user) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:4000/login', JSON.stringify(user), { headers: headers })
            .subscribe(function (response) {
            if (response.json().auth) {
                console.log(response.json().message);
                sessionStorage.setItem('auth_token', response.json().id_token);
                _this.router.navigate(['/user', JSON.stringify(user)]);
            }
            else {
                console.log(response.json().message);
                _this.message = response.json().message;
            }
        }, function (err) {
            console.log(err);
            _this.message = 'Somthing wrong! try again.';
        });
    };
    loginComponent.prototype.signup = function () {
        this.router.navigate(['/signup']);
    };
    loginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/components/Login/login.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], loginComponent);
    return loginComponent;
}());
exports.loginComponent = loginComponent;
//# sourceMappingURL=login.component.js.map