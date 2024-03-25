import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from '../../../pages/home/home.component';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    RouterLinkActive,
    HomeComponent,
    NgFor,
  ],
  templateUrl: './groups.component.html',
})
export class GroupsComponent {

}
