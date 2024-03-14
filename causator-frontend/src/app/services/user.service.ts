import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IUser } from "../interfaces/user.interface";
import { API_URL } from "../constants/constants";
import { Observable, catchError, tap } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: 'root',
})

export class UserService {

    users: any[] = [];
    roles: any[] = [];
    roleContacts: any[] = [];
    contact: any[] = [];
    
    currentRouteParams: any;

    constructor (
        private readonly http: HttpClient,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        private toastr: ToastrService,
    ) {
        this.route.params.subscribe(params => {
            this.currentRouteParams = params;
        });
        
    }

    getAllContacts(): Observable<any[]> {
        return this.http.get(`${API_URL}/api/contacts`)
        .pipe(
            catchError(err => {
                throw new Error(err.message) 
            }),
            tap((res: any) => this.users),
        )
    }

    getAllRoles(): Observable<any[]> {
        return this.http.get(`${API_URL}/api/roles`)
        .pipe(
            catchError(err => {
                throw new Error(err.message) 
            }),
            tap((res: any) => this.roles),
        )
    }

    getContactsByRole(id:string): Observable<any[]> {
        return this.http.get(`${API_URL}/api/roles/${id}`)
        .pipe(
            catchError(err => {
                throw new Error(err.message) 
            }),
            tap((res: any) => this.roleContacts),
        )
    }

    addNewUser(userData: IUser) { 
        return this.http.post(`${API_URL}/api/contacts/create`, userData)
        .pipe(
            catchError(err => {
                throw new Error(err.message),
                this.toastr.error("Акаунт з такою ел. поштою вже існує!", 'Помилка')
            })
        )
        .subscribe(res => {
            this.toastr.success('Аккаунт створено!', 'Успіх!');
            // form.resetForm();
        });
    }

    getContact(id:string): Observable<any[]> {
        return this.http.get(`${API_URL}/api/contact/${id}`)
        .pipe(
            catchError(err => {
                throw new Error(err.message) 
            }),
            tap((res: any) => this.roleContacts),
        )
    }

}