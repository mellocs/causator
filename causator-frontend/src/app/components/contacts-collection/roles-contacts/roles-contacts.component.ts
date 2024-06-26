import { CommonModule, NgFor, NgIf, TitleCasePipe } from '@angular/common';
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

  role!: string;
  roleId!: Observable<UserService[]>;
  roles: any[] = [];
  users: any[] = [];
  showForm: boolean = false;
  newUser: string = '';
  userData: FormGroup;
  // isActive: boolean = false;

  value: any;



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
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    }) 

    this.getAll()
    
  }


  getAll() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.userService.getContactsByRole(id).subscribe(
        (res: any) => {
          this.users = res.contacts;
          console.log(this.users)
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
          // console.log(this.users)
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

  changeAccess(id:string, status:string) {
    this.userService.changeAccessById(id, status)
    console.log(id)
  }

  showAddForm() {
    this.showForm = !this.showForm
  }

  closeAddForm() {
    this.showForm = !this.showForm
  }



}
