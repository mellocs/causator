import { NgFor, NgIf, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterLink, RouterLinkActive, RouterOutlet, ActivatedRoute, Router } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { Observable } from 'rxjs';
import { EventsService } from '../../services/event.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    RouterLinkActive,
    DashboardComponent,
    NgFor,
    ContactsComponent,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    CommonModule, 
    HttpClientModule, 
    RouterOutlet
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {

  events: any[] = [];
  showForm: boolean = false;
  newEvent: string = '';
  eventData: FormGroup;

  constructor(
    private eventsService: EventsService,
    private readonly router: Router,
    private route: ActivatedRoute,
  ) {

    this.eventData = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      source: new FormControl('', [
        Validators.required
      ]),
      description: new FormControl('', [
        Validators.required,
      ]),
    }) 
  }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   const id = params['id'];

    //   this.eventsService.getAllEvents(id).subscribe(
    //     (res: any) => {
    //       this.events = res.contacts;
    //     },
    //     (error: any) => {
    //       console.error('Error loading contacts:', error);
    //     }
    //   );

    // });
  }
  

  // addUser(): void {
  //   if (this.eventData) {
  //     this.eventsService.addNewEvent(this.eventData.value);
  //     console.log(this.eventData.value);
      
  //   } else {
  //     console.log("invalid events data");
  //   } 
  // }

  showAddForm() {
    this.showForm = !this.showForm
  }

  close() {
    this.showForm = !this.showForm
  }


}
