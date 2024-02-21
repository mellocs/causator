import { CommonModule, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { threadId } from 'worker_threads';
import { LoginComponent } from '../login/login.component';

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
    LoginComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  userData: FormGroup
  hidePassword: boolean = true;

  showPassword() {
    this.hidePassword = !this.hidePassword;
    console.log(this.hidePassword)
  }

  constructor () {
    this.userData = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/)
      ])
    }) 
  }

  submitRegistration() {
    if (this.userData.valid) {
      console.log(this.userData.value);
    } else {
      console.log("invalid data");
    }
    
  }
}
