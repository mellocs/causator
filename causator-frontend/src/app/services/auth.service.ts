import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, signal } from "@angular/core";
import { Router } from "@angular/router";
import { API_URL } from "../constants/constants";
import { catchError } from "rxjs";
import { ToastrService } from 'ngx-toastr';
import { ISignupUser } from "../interfaces/signup.interface";
import { IAuthUser, IUser } from "../interfaces/auth.interface";

@Injectable({
    providedIn: 'root',
})

export class AuthService {


    isAuthSig = signal<boolean>(false)
    
    
    constructor (
        private readonly http: HttpClient,
        private toastr: ToastrService,
        private readonly router: Router
    ) {
        const token = localStorage.getItem('auth_token')
        this.isAuthSig.set(!!token)
        
    }

    signUp(userData: ISignupUser) {
        return this.http.post(`${API_URL}/api/register`, userData)
        .pipe(
            catchError(err => {
                throw new Error(err.message),   
                this.toastr.error("Акаунт з такою ел. поштою вже існує!", 'Помилка')
            })
        )
        .subscribe(res => {
            this.toastr.success('Аккаунт створено!', 'Успіх!');
            this.router.navigate(['login']);
        });
    }

    login(userData: IAuthUser) {
        return this.http.post<IUser>(`${API_URL}/api/login`, userData)
        .pipe(
            catchError(err => {
                throw new Error(err.message),
                this.toastr.error('Такий користувач не зареєстрований !', 'Помилка!');
            })
            
        )
        .subscribe((res: IUser) => {
            this.isAuthSig.set(true)
            this.router.navigate(['dashboard']);
            localStorage.setItem('auth_token', res.token);
        })
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.isAuthSig.set(false)
        this.router.navigate(['login']);
        this.toastr.success('Ви вийшли з аккаунту')
    }
} 