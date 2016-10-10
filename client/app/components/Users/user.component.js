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
var stud_service_1 = require("../../services/stud.service");
var router_1 = require("@angular/router");
var jwtdecode = require('jwt-decode');
var userComponent = (function () {
    function userComponent(studService, routes, router) {
        this.studService = studService;
        this.routes = routes;
        this.router = router;
        this.user = {};
        this.users = [];
    }
    userComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.token = sessionStorage.getItem('auth_token');
        if (this.token) {
            this.dec = jwtdecode(this.token);
            console.log(this.token);
            console.log(this.dec);
            this.studService.getStudList().then(function (list) { return _this.users = list; });
            this.routes.params.subscribe(function (params) {
                var name = params['name'];
                if (name)
                    _this.newUser = JSON.parse(name);
            });
        }
        else {
            this.router.navigate(['']);
        }
    };
    userComponent.prototype.ngOnDestroy = function () {
        sessionStorage.removeItem('auth_token');
    };
    userComponent.prototype.onclick = function (user) {
        this.users.push(user);
    };
    userComponent.prototype.showUser = function (user) {
        this.currentUser = user;
    };
    userComponent.prototype.logout = function () {
        sessionStorage.removeItem('auth_token');
        this.router.navigate(['']);
    };
    userComponent = __decorate([
        core_1.Component({
            selector: 'user',
            templateUrl: 'app/components/Users/user.component.html',
            providers: [stud_service_1.studService]
        }), 
        __metadata('design:paramtypes', [stud_service_1.studService, router_1.ActivatedRoute, router_1.Router])
    ], userComponent);
    return userComponent;
}());
exports.userComponent = userComponent;
//# sourceMappingURL=user.component.js.map