import {Component, OnInit} from '@angular/core';
import {studService} from "../../services/stud.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

var jwtdecode = require('jwt-decode');

@Component({
    selector: 'user',
    templateUrl: 'app/components/Users/user.component.html',
    providers: [studService]
})

export class userComponent implements OnInit{
    currentUser: any;
    newUser: any;
    user = {};
    users = [];
    token: string;
    dec: string;

    constructor(
        private studService: studService,
        private routes: ActivatedRoute,
        private router: Router
    ){}

    ngOnInit(): void{
        this.token = sessionStorage.getItem('auth_token');
        if(this.token){
            this.dec = jwtdecode(this.token);
            console.log(this.token);
            console.log(this.dec);
            this.studService.getStudList().then(list => this.users = list);
            this.routes.params.subscribe((params: Params) => {
                let name = params['name'];
                if(name)
                this.newUser = JSON.parse(name);
            })
        } else {
            this.router.navigate(['']);
        }
    }

    ngOnDestroy(): void{
        sessionStorage.removeItem('auth_token');
    }

    onclick(user){
        this.users.push(user);
    }

    showUser(user){
        this.currentUser = user;
    }

    logout(){
        sessionStorage.removeItem('auth_token');
        this.router.navigate(['']);
    }
}