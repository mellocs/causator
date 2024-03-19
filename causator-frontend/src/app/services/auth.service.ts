import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, signal } from "@angular/core";
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


    isAuthSig = signal<boolean>(false)

    accountData: any;
    
    
    constructor (
        private readonly http: HttpClient,
        private toastr: ToastrService,
        private readonly router: Router
    ) {
        const token = localStorage.getItem('auth_token')
        this.isAuthSig.set(!!token)
        
    }

    // getAccountData(): any {
    //     console.log(111)
    //     return this.accountData
    // }

    signUp(userData: ISignupUser) { 
        return this.http.post(`${API_URL}/api/register`, userData)
        .pipe(
            catchError(err => {
                throw new Error(err.statusText),
                this.toastr.error(`${err.statusText}`, 'Error')
            })
        )
        .subscribe(res => {
            this.toastr.success('Account created!', 'Success!');
            this.router.navigate(['login']);
        });
    }

    login(userData: IAuthUser) {
        return this.http.post<IAuthUser>(`${API_URL}/api/login`, userData)
        .pipe(
            catchError(err => {
                throw new Error(err.message),
                this.toastr.error('Incorrect data!', 'Error!');
            })
            
        )
        .subscribe((res: any) => {
            this.accountData = res;
            this.isAuthSig.set(true)
            this.router.navigate(['dashboard']);
            localStorage.setItem('auth_token', res.token);
            const alias = res.contact.alias;
            localStorage.setItem('alias', alias);
            console.log(res)
        })
    }

    logout() {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('alias');
        this.isAuthSig.set(false)
        this.router.navigate(['login']);
        this.toastr.success('Log out')
    }

} 