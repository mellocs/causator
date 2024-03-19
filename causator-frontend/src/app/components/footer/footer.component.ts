import { NgIf, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    LoginComponent, 
    NgIf, 
    CommonModule, 
    RouterLinkActive
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
