import { NgFor, NgIf, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterLink, RouterLinkActive, RouterOutlet, Router, ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../../../pages/home/home.component';
import { ContactsComponent } from '../contacts.component';
import { UserService } from '../../../services/user.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-contact',
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
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent{

  user!: Observable<UserService[]>;
  UserId!: Observable<UserService[]>;

  constructor(
    private userService: UserService,
    private readonly router: Router,
    private route: ActivatedRoute,
  ) {
    this.getContactById()
  }


  getContactById() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.userService.getContactsById(id).subscribe(
        (res: any) => {

          console.log(111)
          console.log(res)
          // this.user = res.contacts;
        },
        (error: any) => {
          console.error('Error loading contacts:', error);
        }
      );
    });
  }

}




