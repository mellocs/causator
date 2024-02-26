import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { API_URL } from "../constants/constants";
import { catchError } from "rxjs";
import { ToastrService } from 'ngx-toastr';
import { ISignupUser } from "../interfaces/signup.interface";
import { IAuthUser } from "../interfaces/auth.interface";

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    constructor (
        private readonly http: HttpClient,
        private toastr: ToastrService,
        private readonly router: Router
    ) {
        
    }

    signUp(userData: ISignupUser) {
        return this.http.post(`${API_URL}/api/register`, userData)
        .pipe(
            catchError(err => {
                throw new Error(err.message),
                this.toastr.error('Account not created!', 'Error');
            })
        )
        .subscribe(res => {
            this.toastr.success('Account created!', 'Success');
            this.router.navigate(['login']);
        });
    }

    login(userData: IAuthUser) {
        return this.http.post(`${API_URL}/api/login`, userData)
        .pipe(
            catchError(err => {
                throw new Error(err.message),
                this.toastr.error('Invalid email or password!', 'Error!');
            })
        )
        .subscribe(res => {
            this.router.navigate(['profile']);
        })
    }
} 