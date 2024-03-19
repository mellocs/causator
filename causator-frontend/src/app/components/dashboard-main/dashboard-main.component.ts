import { NgFor, NgIf, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterLink, RouterLinkActive, RouterOutlet, ActivatedRoute, Router } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard-main',
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
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.scss'
})
export class DashboardMainComponent {

  user: any;

  constructor(
    private userService: UserService,
    private readonly router: Router,
    private route: ActivatedRoute,
  ) {
    this.getContact()
  }


  getContact() {
      this.userService.getCurrentContact().subscribe(
        (res: any) => {

          console.log(111)
          console.log(res)
          this.user = res
          // this.user = res.contacts;
        },
        (error: any) => {
          console.error('Error loading contacts:', error);
        }
      );
  }

}
