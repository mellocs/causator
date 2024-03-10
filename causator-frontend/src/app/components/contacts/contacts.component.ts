import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserService } from '../../services/user.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    RouterLinkActive,
    DashboardComponent,
    NgFor
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {

  users: any[] = [];

  constructor(private userService: UserService) { 

  }

  ngOnInit(): void {
    this.users = this.userService.users;
    console.log(this.users);
  }
  
}
