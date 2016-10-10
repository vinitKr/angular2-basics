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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var signupComponent = (function () {
    function signupComponent(http, router) {
        this.http = http;
        this.router = router;
        this.user = {};
    }
    signupComponent.prototype.signup = function (user) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:4000/signup', JSON.stringify(user), { headers: headers })
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
    signupComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    signupComponent = __decorate([
        core_1.Component({
            selector: 'signup',
            templateUrl: 'app/components/Signup/signup.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], signupComponent);
    return signupComponent;
}());
exports.signupComponent = signupComponent;
//# sourceMappingURL=signup.component.js.map