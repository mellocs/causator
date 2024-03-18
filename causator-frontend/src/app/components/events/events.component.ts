import { NgFor, NgIf, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterLink, RouterLinkActive, RouterOutlet, ActivatedRoute, Router } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { Observable } from 'rxjs';
import { EventsService } from '../../services/event.service';
import { AuthService } from '../../services/auth.service';

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
    RouterOutlet,
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent implements OnInit {
  events: any[] = [];
  showForm: boolean = false;
  newEvent: string = '';
  eventData: FormGroup;
  accountData: any;

  constructor(
    private eventsService: EventsService,
    private authService: AuthService,
    private readonly router: Router,
    private route: ActivatedRoute
  ) {
    const alias = localStorage.getItem('alias');

    this.eventData = new FormGroup({
      contactName: new FormControl(alias, [Validators.required]),
      type: new FormControl('', [Validators.required]),
      source: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
    });

    this.getAllEvents()
  }

  ngOnInit(): void {
    
  }

  getAllEvents() {
    this.eventsService.getAllEvents().subscribe(
      (res: any) => {
        this.events = res.events;
      },
      (error: any) => {
        console.error('Error loading roles:', error);
      }
    );
  }

  addEvent(): void {
    if (this.eventData) {
      this.eventsService.addNewEvent(this.eventData.value);
    } else {
      console.log('invalid events data');
    }
    this.getAllEvents()

  }

  showAddForm() {
    this.showForm = !this.showForm;
  }

  close() {
    this.showForm = !this.showForm;
  }
}
