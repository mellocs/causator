import { NgFor, NgIf, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../../../pages/dashboard/dashboard.component';
import { ContactsComponent } from '../contacts.component';

@Component({
  selector: 'app-contact',
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
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
