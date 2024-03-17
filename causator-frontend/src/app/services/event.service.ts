import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IUserRole } from "../interfaces/user.interface";
import { API_URL } from "../constants/constants";
import { Observable, catchError, tap } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { IEvent } from "../interfaces/event.interface";

@Injectable({
    providedIn: 'root',
})

export class EventsService {

    events: any[] = [];
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

    // getAllEvents(): Observable<any[]> {
    //     return this.http.get(`${API_URL}/api/events`)
    //     .pipe(
    //         catchError(err => {
    //             throw new Error(err.message) 
    //         }),
    //         tap((res: any) => this.events),
    //     )
    // }


    // addNewEvent(eventData: IEvent) { 
    //     return this.http.post(`${API_URL}/api/event/create`, eventData)
    //     .pipe(
    //         catchError(err => {
    //             throw new Error(err.message),
    //             this.toastr.error("Something wrong!", 'Error')
    //         })
    //     )
    //     .subscribe(res => {
    //         this.toastr.success('Event added!', 'Success!');
    //     });
    // }
}