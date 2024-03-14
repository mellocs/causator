import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive, ActivatedRoute, Router } from '@angular/router';
import { DashboardComponent } from '../../../pages/dashboard/dashboard.component';
import { ContactsComponent } from '../contacts.component';
import { UserService } from '../../../services/user.service';
import { Observable, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-roles-item',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    RouterLinkActive,
    DashboardComponent,
    NgFor,
    ContactsComponent
  ],
  templateUrl: './roles-item.component.html',
  styleUrl: './roles-item.component.scss'
})
export class RolesItemComponent implements OnInit {

  role!: Observable<UserService[]>;
  roles: any[] = [];
  users: any[] = []

  constructor(
    private userService: UserService,
    private readonly router: Router,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.userService.getContactsByRole(id).subscribe(
        (res: any) => {
          this.users = res.contacts;
        },
        (error: any) => {
          console.error('Error loading contacts:', error);
        }
      );

      this.userService.getAllRoles().subscribe(
        (res: any) => {
          this.role = res.roles[id-1].name;
          // console.log(res.roles[id-1].name)
        },
        (error: any) => {
          console.error('Error loading roles:', error);
        }
      );

    });
  }



}
