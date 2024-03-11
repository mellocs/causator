import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { ContactsComponent } from '../../components/contacts/contacts.component';
import { UserService } from '../../services/user.service';
import { TasksComponent } from '../../components/tasks/tasks.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    RouterLinkActive,
    ContactsComponent,
    TasksComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


  userData:any
  public isOpenProcess:boolean = false;
  public isOpenProcessItem:boolean = false;

  constructor (private readonly userService: UserService) {
    
  }

  openProcess() {
    this.isOpenProcess = !this.isOpenProcess;

  }

  openProcessItem() {
    this.isOpenProcessItem = !this.isOpenProcessItem;

  }

}
