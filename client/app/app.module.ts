import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {appComponent} from "./app.component";
import {loginComponent} from "./components/Login/login.component";
import {userComponent} from "./components/Users/user.component";
import {routing} from "./app.route";
import {HttpModule} from "@angular/http";
import {signupComponent} from "./components/Signup/signup.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations: [
        appComponent,
        loginComponent,
        signupComponent,
        userComponent
    ],
    bootstrap: [
        appComponent
    ]
})

export class appModule{}