import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { API_URL } from "../constants/constants";
import { Observable, catchError, tap } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class TaskService {

    tasks: any[] = [];
    // currentRouteParams: any;

    constructor (
        private readonly http: HttpClient,
        private readonly router: Router,
        private readonly route: ActivatedRoute
    ) {
        // this.route.params.subscribe(params => {
        //     this.currentRouteParams = params;
        // });
        
    }

    add(task: any): void {
        this.tasks.push(task);
    }

    toggleCompleted(id: number): void {
        const task = this.tasks.find(todo => todo.id === id);
        if (task) {
            task.completed = !task.completed;
        }
        }
}