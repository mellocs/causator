import { NgFor, NgIf, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-notifications',
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
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {

}
