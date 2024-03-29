import { NgFor, NgIf, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterLink, RouterLinkActive, RouterOutlet, ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
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
    HomeComponent,
    NgFor,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    CommonModule,
    HttpClientModule,
    RouterOutlet,
  ],
  templateUrl: './events.component.html',
})
export class EventsComponent implements OnInit {

  events: any[] = [];
  showForm: boolean = false;
  newEvent: string = '';
  eventData: FormGroup;
  accountData: any;
  id: string = '1'

  constructor(
    private eventsService: EventsService,
    private authService: AuthService,
    private readonly router: Router,
    private route: ActivatedRoute
  ) {
    // const alias = localStorage.getItem('alias');

    this.eventData = new FormGroup({
      contactName: new FormControl('', [Validators.required]),
      type: new FormControl(this.id, [Validators.required]),
      source: new FormControl(this.id, [Validators.required]),
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

  addEvent(form: FormGroupDirective): void {
    if (this.eventData) {
      this.eventsService.addNewEvent(this.eventData.value);
      form.reset({
        source: '1',
        type: '1'
      });
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
