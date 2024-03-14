import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive, ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../../../pages/dashboard/dashboard.component';
import { ContactsComponent } from '../contacts.component';
import { UserService } from '../../../services/user.service';
import { Observable, Subscription, switchMap } from 'rxjs';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-roles-item',
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
  templateUrl: './roles-item.component.html',
})
export class RolesItemComponent implements OnInit {

  role!: Observable<UserService[]>;
  role_id!: Observable<UserService[]>;
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
      role_id: new FormControl('', [
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
        // Validators.minLength(8),
        // Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/)
      ]),
    }) 
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
          this.role_id = res.roles[id-1].id;
        },
        (error: any) => {
          console.error('Error loading roles:', error);
        }
      );

    });
  }
  

  addUser(): void {
    if (this.userData.valid) {
      this.userService.addNewUser(this.userData.value);
      console.log(this.role_id);
      // this.userData.reset({ alias: '', email: '', password:''})
      console.log(this.userData.value);
      
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
