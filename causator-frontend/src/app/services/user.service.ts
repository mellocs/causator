import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IUser } from "../interfaces/user.interface";
import { API_URL } from "../constants/constants";
import { Observable, catchError, tap } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class UserService {

    users: any[] = [];
    currentRouteParams: any;

    constructor (
        private readonly http: HttpClient,
        private readonly router: Router,
        private readonly route: ActivatedRoute
    ) {
        this.route.params.subscribe(params => {
            this.currentRouteParams = params;
        });
        
    }

    getAll(): Observable<any[]> {
        return this.http.get(`${API_URL}/api/contacts`)
        .pipe(
            catchError(err => {
                throw new Error(err.message) 
            }),
            tap((res: any) => this.users),
        )
    }
}