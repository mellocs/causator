import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
