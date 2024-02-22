import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { IAuthUser } from "../types/user.interface";
import { API_URL } from "../constants/constants";
import { catchError } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    constructor (
        private readonly http: HttpClient,
        private readonly router: Router
    ) {
        
    }

    signUp(userData: IAuthUser) {
        return this.http.post(`${API_URL}/user`, userData)
        .pipe(
            catchError(err => {
                throw new Error(err.message)
            })
        )
        .subscribe();
    }
}