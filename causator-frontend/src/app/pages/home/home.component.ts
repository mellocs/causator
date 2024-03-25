import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { TasksComponent } from '../../components/tasks/tasks.component';
import { AuthService } from '../../services/auth.service';
import { RolesComponent } from '../../components/contacts-collection/roles/roles.component';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    RouterLinkActive,
    TasksComponent,
    RolesComponent,
    SearchComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {


  userData:any
  public isOpenProcess:boolean = false;
  public isOpenAccount:boolean = false;
  public isOpenProcessItem:boolean = false;

  public isOpenContacts:boolean;

  public isOpenJobs:boolean = false;

  public isOpenItems:boolean = false;
  

  constructor (
    private readonly userService: UserService,
    public authService: AuthService
    ) {
    this.isOpenContacts = false;
  }


  openProcess() {
    this.isOpenProcess = !this.isOpenProcess;
  }

  openProcessItem() {
    this.isOpenProcessItem = !this.isOpenProcessItem;
  }

  openJobs() {
    this.isOpenJobs = !this.isOpenJobs;
  }

  openItems() {
    this.isOpenItems = !this.isOpenItems;
  }

  openContacts() {
    this.isOpenContacts = !this.isOpenContacts;
  }



  openAccount() {
    this.isOpenAccount = !this.isOpenAccount;

  }

  logout() {
    this.authService.logout()
  }

}
