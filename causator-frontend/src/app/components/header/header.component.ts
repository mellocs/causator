import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    LoginComponent, 
    NgIf, 
    CommonModule, 
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  constructor(public authService: AuthService) {

  }

  logout() {
    this.authService.logout()
  }
}
