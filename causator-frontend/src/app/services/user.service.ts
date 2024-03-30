import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IUserRole } from "../interfaces/user.interface";
import { API_URL } from "../constants/constants";
import { Observable, catchError, tap } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { IContactInfo } from "../interfaces/contact-info.interface";

@Injectable({
    providedIn: 'root',
})

export class UserService {

    users: any[] = [];
    roles: any[] = [];
    roleContacts: any[] = [];
    idContact: any[] = [];
    currentContact: any[] = [];
    contact: any[] = [];
    updateData: any[] = [];
    
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

    getContactsById(id:string): Observable<any[]> {
        return this.http.get(`${API_URL}/api/contacts/${id}`)
        .pipe(
            catchError(err => {
                throw new Error(err.message) 
            }),
            tap((res: any) => this.idContact),
        )
    }


    updateContactsById(id:string, updateData: IContactInfo) {
        return this.http.put(`${API_URL}/api/contacts/${id}/update`, updateData)
        .pipe(
            catchError(err => {
                throw new Error(err.message),
                console.log(updateData),
                this.toastr.error("Something wrong!", 'Error')
            })
        )
        .subscribe(res => {
            this.toastr.success('Account updated!', 'Success!');
        });
    }



    deleteContactsById(id:string) {
        return this.http.get(`${API_URL}/api/contacts/delete/${id}`)
        .pipe(
            catchError(err => {
                throw new Error(err.message),
                this.toastr.error("Something wrong!", 'Error')
            })
        )
        .subscribe(res => {
            this.toastr.success('Account delete!', 'Success!');
            this.router.navigate(['/home/contacts/roles']);
        });
    }


    addNewUser(userData: IUserRole) { 
        return this.http.post(`${API_URL}/api/contacts/create`, userData)
        .pipe(
            catchError(err => {
                throw new Error(err.message),
                this.toastr.error("Something wrong!", 'Error')
            })
        )
        .subscribe(res => {
            this.toastr.success('Account create!', 'Success!');
            this.getContactsByRole
            
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

    getCurrentContact(): Observable<any[]> {
        return this.http.get(`${API_URL}/api/contacts/current`)
        .pipe(
            catchError(err => {
                throw new Error(err.message) 
            }),
            tap((res: any) => this.currentContact),
        )
    }

    changeAccessById(id:string): Observable<any[]> {
        return this.http.get(`${API_URL}/api/${id}/status`)
        .pipe(
            catchError(err => {
                throw new Error(err.message) 
            }),
            tap((res: any) => {console.log(res)}),
        )
    }

}