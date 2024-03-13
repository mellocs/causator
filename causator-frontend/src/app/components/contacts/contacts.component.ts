import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive, Router, ActivatedRoute } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserService } from '../../services/user.service';
import { NgFor } from '@angular/common';
import { RolesComponent } from './roles/roles.component';
import { GroupsComponent } from './groups/groups.component';


@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    RouterLinkActive,
    DashboardComponent,
    NgFor,
    RolesComponent,
    GroupsComponent
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {

  users: any[] = [];

  constructor(
    private userService: UserService,
    private readonly router: Router,
    private route: ActivatedRoute
    ) { 

  }

  ngOnInit(): void {
    this.userService.getAllContacts().subscribe(
      (res: any) => {
        this.users = res.contacts;
        console.log(this.users);
      },
      (error: any) => {
        console.error('Error loading contacts:', error);
      }
    );
  }
  
}
