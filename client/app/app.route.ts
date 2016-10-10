import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {appComponent} from "./app.component";
import {loginComponent} from "./components/Login/login.component";
import {userComponent} from "./components/Users/user.component";
import {signupComponent} from "./components/Signup/signup.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: loginComponent
    },
    {
        path: 'signup',
        component: signupComponent
    },
    {
        path: 'user',
        component: userComponent
    }
    ,
    {
        path: 'user/:name',
        component: userComponent
    }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);