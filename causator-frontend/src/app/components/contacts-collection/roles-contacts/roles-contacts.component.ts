import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive, ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../../../pages/home/home.component';
import { UserService } from '../../../services/user.service';
import { Observable, Subscription, switchMap } from 'rxjs';
import { FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-roles-contacts',
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
  templateUrl: './roles-contacts.component.html',
})
export class RolesItemComponent {

  role!: Observable<UserService[]>;
  roleId!: Observable<UserService[]>;
  roles: any[] = [];
  users: any[] = [];
  showForm: boolean = false;
  newUser: string = '';
  userData: FormGroup;



  constructor(
    private userService: UserService,
    private readonly router: Router,
    private route: ActivatedRoute,
  ) {

    
    this.userData = new FormGroup({
      roleId: new FormControl(this.roleId, [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      alias: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    }) 

    this.getAll()
    
  }


  getAll() {
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
          this.roleId = res.roles[id-1].id;
          this.userData.get('roleId')?.setValue(this.roleId);          
        },
        (error: any) => {
          console.error('Error loading roles:', error);
        }
      );

    });
  }
  

  addUser(form: FormGroupDirective): void {
    if (this.userData) {
      this.userService.addNewUser(this.userData.value);
      console.log(this.roleId);
      console.log(this.userData.value);
      form.reset();
      this.getAll()
      
    } else {
      console.log("invalid user data");
    } 
  }

  showAddForm() {
    this.showForm = !this.showForm
  }

  close() {
    this.showForm = !this.showForm
  }



}
