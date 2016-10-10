import { Component } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {Router} from "@angular/router";

@Component({
    selector: 'signup',
    templateUrl: 'app/components/Signup/signup.component.html'
})
export class signupComponent {
    message: string;
    user = {};

    constructor(
        private http: Http,
        private router: Router
    ){}

    signup(user){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:4000/signup', JSON.stringify(user) , { headers })
            .subscribe(
                response => {
                    if(response.json().auth){
                        console.log(response.json().message);
                        sessionStorage.setItem('auth_token', response.json().id_token);
                        this.router.navigate(['/user', JSON.stringify(user)]);
                    } else {
                        console.log(response.json().message);
                        this.message = response.json().message;
                    }
                },
                err => {
                    console.log(err);
                    this.message = 'Somthing wrong! try again.'
                }
            );
    }

    login(){
        this.router.navigate(['/login']);
    }
}