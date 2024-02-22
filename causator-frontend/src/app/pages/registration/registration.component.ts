import { CommonModule, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { threadId } from 'worker_threads';
import { LoginComponent } from '../login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    CommonModule, 
    HttpClientModule, 
    RouterLink, 
    RouterModule, 
    RouterOutlet,
    LoginComponent,
    FormsModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
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
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/)
      ]),
      password_confirmation: new FormControl('', [
        Validators.required,
        
      ])
    }) 
  }


  
  submitRegistration() {
    if (this.userData.valid && (this.userData.value.password === this.userData.value.password_confirmation)) {
      this.authService.signUp(this.userData.value)
      console.log(this.userData.value);
    } else {
      console.log("invalid user data");
    } 
  }
}
