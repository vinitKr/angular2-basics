import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Http, Headers} from "@angular/http";

@Component({
    selector: 'login',
    templateUrl: 'app/components/Login/login.component.html'
})

export class loginComponent{
    message: string;
    user = {};

    constructor(
        private router: Router,
        private http: Http
    ){ }

    login(user){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:4000/login', JSON.stringify(user) , { headers })
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

    signup(){
        this.router.navigate(['/signup']);
    }
}