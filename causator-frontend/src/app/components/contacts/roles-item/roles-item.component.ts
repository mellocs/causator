import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive, ActivatedRoute, Router } from '@angular/router';
import { DashboardComponent } from '../../../pages/dashboard/dashboard.component';
import { ContactsComponent } from '../contacts.component';
import { UserService } from '../../../services/user.service';
import { Observable, switchMap } from 'rxjs';

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
    selectedId = 0;

  constructor(
    private userService: UserService,
    private readonly router: Router,
    private route: ActivatedRoute
    ) { 

  }


  ngOnInit() {
    this.role = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        console.log(this.selectedId)
        return this.userService.getContactsByRole();
      })
    );
    console.log(this.selectedId)

    
  }



}
