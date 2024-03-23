import { CommonModule, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../../services/auth.service';
import { HeaderComponent } from '../../components/header/header.component';

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
    FormsModule,
    HeaderComponent
  ],
  templateUrl: './registration.component.html',
})
export class RegistrationComponent {
  userData: FormGroup;
  hidePassword: boolean = true;

  showPassword() {
    this.hidePassword = !this.hidePassword;
  }

  constructor(private readonly authService: AuthService) {
    this.userData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      alias: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        // Validators.minLength(8),
        // Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/)
      ]),
      password_confirmation: new FormControl('', [
        Validators.required,
        this.passwordConfirmationValidator.bind(this),
      ]),
    });
  }

  passwordConfirmationValidator(
    control: FormControl
  ): { [s: string]: boolean } | null {
    const passwordControl = this.userData
      ? this.userData.get('password')
      : null;
    if (passwordControl && control.value != passwordControl.value) {
      return { mismatch: true };
    }
    return null;
  }

  submitRegistration() {
    if (
      this.userData.valid &&
      this.userData.value.password === this.userData.value.password_confirmation
    ) {
      this.authService.signUp(this.userData.value);
      console.log(this.userData.value);
    } else {
      console.log('invalid user data');
    }
  }
}
