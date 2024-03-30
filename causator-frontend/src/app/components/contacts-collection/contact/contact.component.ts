import { NgFor, NgIf, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
  updateData: FormGroup;
  UserId!: Observable<UserService[]>;
  public openForm:boolean = false;
  public deleteModal:boolean = false;



  constructor(
    private userService: UserService,
    private readonly router: Router,
    private route: ActivatedRoute,
  ) {
    this.getContactById()

    this.updateData = new FormGroup({
      alias: new FormControl('',   [Validators.required]),
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone_number: new FormControl('', [Validators.required]),
      organization: new FormControl('', [Validators.required]),
      messenger: new FormControl('', [Validators.required]),
      roleId: new FormControl('', [Validators.required]),
    });
  }


  getContactById() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.userService.getContactsById(id).subscribe(
        (res: any) => {
          console.log(res);
          
          this.user = res.contact;
          this.userInfo = res.contact.contact_info[0];

          this.updateData.patchValue({
            alias: this.user.alias,
            first_name: this.userInfo.first_name,
            last_name: this.userInfo.last_name,
            address: this.userInfo.address,
            phone_number: this.userInfo.phone_number,
            organization: this.userInfo.organization,
            messenger: this.userInfo.messenger,
            roleId: '6',
          });

        },
        (error: any) => {
          console.error('Error loading contacts:', error);
        }
      );
    });
  }

  deleteContactById() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.userService.deleteContactsById(id);
      this.deleteModal = false;
    });
  }


  submitUpdate() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.userService.updateContactsById(id, this.updateData.value);
      console.log(this.updateData.value);
      this.openForm = false;
      this.getContactById()
    });
    }

  // updateContactById() {
  //   this.route.params.subscribe(params => {
  //     const id = params['id'];
  //     this.userService.updateContactsById(id);
  //     this.deleteModal = false;
  //   });
  // }

  showForm() {
    this.openForm = !this.openForm;
  }

  closeForm() {
    this.openForm = false;
  }

  showDeleteModal() {
    this.deleteModal = !this.deleteModal;
  }

  closeDeleteModal() {
    this.deleteModal = false;
  }
  

}




