import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { ContactsComponent } from '../../components/contacts/contacts.component';
import { UserService } from '../../services/user.service';
import { TasksComponent } from '../../components/tasks/tasks.component';
import { AuthService } from '../../services/auth.service';
import { RolesComponent } from '../../components/contacts/roles/roles.component';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    RouterLinkActive,
    ContactsComponent,
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
  public isOpenContactsGroups:boolean;
  public isOpenContactsGroupsCustom:boolean;
  

  constructor (
    private readonly userService: UserService,
    public authService: AuthService
    ) {
    this.isOpenContacts = false;
    this.isOpenContactsGroups = false;
    this.isOpenContactsGroupsCustom = false;
  }


  openProcess() {
    this.isOpenProcess = !this.isOpenProcess;

  }

  openProcessItem() {
    this.isOpenProcessItem = !this.isOpenProcessItem;

  }

  openContacts() {
    this.isOpenContacts = !this.isOpenContacts;
  }

  openContactsGroups() {
    this.isOpenContactsGroups = !this.isOpenContactsGroups;
  }

  openContactsGroupsCustom() {
    this.isOpenContactsGroupsCustom = !this.isOpenContactsGroupsCustom;
  }

  openAccount() {
    this.isOpenAccount = !this.isOpenAccount;

  }

  logout() {
    this.authService.logout()
  }

}
