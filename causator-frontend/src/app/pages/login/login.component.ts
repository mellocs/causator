import { NgIf, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf, 
    CommonModule, 
    HttpClientModule,
    RouterLink, 
    RouterModule, 
    RouterOutlet,
    RegistrationComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userData: FormGroup
  hidePassword: boolean = true;

  showPassword() {
    this.hidePassword = !this.hidePassword;
  }

  constructor (private readonly authService: AuthService) {
    this.userData = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
      ])
    }) 
  }


  
  submitLogin() {
    if (this.userData.valid) {
      // this.authService.signUp(this.userData.value)
      console.log(this.userData.value);
    } else {
      console.log("invalid user data");
    } 
  }
}
