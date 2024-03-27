import { NgFor, NgIf, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterLink, RouterLinkActive, RouterOutlet, Router, ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../../../pages/home/home.component';
import { UserService } from '../../../services/user.service';
import { Observable } from 'rxjs';
import { IContactInfo } from '../../../interfaces/contact-info.interface';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    RouterLinkActive,
    HomeComponent,
    NgFor,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    CommonModule, 
    HttpClientModule, 
    RouterOutlet
  ],
  templateUrl: './contact.component.html',
})
export class ContactComponent{

  user: any;
  userInfo: any;
  UserId!: Observable<UserService[]>;
  public openForm:boolean = false;


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
          console.log(res);
          
          this.user = res.contact;
          this.userInfo = res.contact.contact_info[0];

        },
        (error: any) => {
          console.error('Error loading contacts:', error);
        }
      );
    });
  }

  showForm() {
    this.openForm = !this.openForm;
  }

  closeForm() {
    this.openForm = false;
  }
  

}




