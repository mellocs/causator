import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { IUser } from "../interfaces/user.interface";
import { API_URL } from "../constants/constants";
import { catchError } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class UserService {

    users: any[] = [];

    constructor (
        private readonly http: HttpClient,
        private readonly router: Router
    ) {
        
        
    }

    getAll() {
        return this.http.get(`${API_URL}/api/contacts`)
        .pipe(
            catchError(err => {
                throw new Error(err.message) 
            })
        )
        .subscribe((res:any) => {
            this.users = res;
        });
    }
}