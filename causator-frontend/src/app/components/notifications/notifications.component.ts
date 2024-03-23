import { NgFor, NgIf, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    RouterLinkActive,
    HomeComponent,
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
