import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterModule, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { NgFor } from '@angular/common';
import { HomeComponent } from '../../../pages/home/home.component';
import { ContactsComponent } from '../contacts.component';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    RouterLinkActive,
    HomeComponent,
    NgFor,
    ContactsComponent
  ],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent implements OnInit {

  roles: any[] = [];

  constructor(
    private userService: UserService,
    private readonly router: Router,
    private route: ActivatedRoute
    ) { 

  }

  ngOnInit(): void {
    this.userService.getAllRoles().subscribe(
      (res: any) => {
        this.roles = res.roles;
        // console.log(res);
      },
      (error: any) => {
        console.error('Error loading roles:', error);
      }
    );
  }
}
