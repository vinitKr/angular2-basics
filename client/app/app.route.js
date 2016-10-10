"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require("./components/Login/login.component");
var user_component_1 = require("./components/Users/user.component");
var signup_component_1 = require("./components/Signup/signup.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.loginComponent
    },
    {
        path: 'signup',
        component: signup_component_1.signupComponent
    },
    {
        path: 'user',
        component: user_component_1.userComponent
    },
    {
        path: 'user/:name',
        component: user_component_1.userComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.route.js.map